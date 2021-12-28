import { CSSProperties } from "react";
import nextButton from "./../../../../assets/common/carousels/next_button.png";
import card1 from "./../../../../assets/common/carousels/Card1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { sizes, colors } from "./../../../../variables";
const Carousel = require("react-responsive-carousel").Carousel;

const datas = [
  {
    one: "./../../../../assets/common/carousels/Card1.png",
    two: "./../../../../assets/common/carousels/Card1.png",
  },
  {
    one: "./../../../../assets/common/carousels/Card1.png",
    two: "./../../../../assets/common/carousels/Card1.png",
  },
  {
    one: "./../../../../assets/common/carousels/Card1.png",
    two: "./../../../../assets/common/carousels/Card1.png",
  },
  { one: "./../../../../assets/common/carousels/Card1.png" },
];

const renderArrow =
  (direction: string) =>
  (onClickHandler: any, shouldBeEnabled: boolean, label: any) => {
    if (!shouldBeEnabled) {
      return;
    }

    const styles: CSSProperties = {
      position: "absolute",
      bottom: 0,
      right: 0,
      zIndex: 2,
      display: "inline-block",
      boxSizing: "border-box",
      height: "57px",
      width: "56px",
      backgroundImage: `url(${nextButton})`,
      backgroundPosition: "center",
    };

    if (direction === "prev") {
      styles.left = 848;
      styles.transform = "scaleX(-1)";
      styles.borderLeft = "1px solid #979797";
    } else {
      styles.right = 0;
    }

    return <div onClick={onClickHandler} style={styles}></div>;
  };

const CarouselBDO = () => {
  return (
    <Wrapper>
      <Carousel
        renderArrowPrev={renderArrow("prev")}
        renderArrowNext={renderArrow("next")}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={false}
        showThumbs={false}
        className="main-slide"
      >
        {datas.map((subData, i) => {
          console.log(subData.one);
          console.log(subData.two);
          return (
            <SingleSlide key={i}>
              <LeftImg src={card1} alt="" />
              <RightImg src={card1} alt="" />
            </SingleSlide>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselBDO;

const Wrapper = styled.div`
  .main-slide {
    height: ${sizes.size287};
    width: ${sizes.size960};
    margin: ${sizes.size35} ${sizes.size0} ${sizes.size0} ${sizes.size0};
    border-radius: ${sizes.size6};
    background-color: ${colors.white};
    padding: ${sizes.size0};
  }
  .carousel {
    height: ${sizes.size363};
    width: ${sizes.size960};
    padding: ${sizes.size0};
    .slider-wrapper {
      width: ${sizes.size960};
      height: ${sizes.size287};
      padding: ${sizes.size0};
    }
  }
`;

const SingleSlide = styled.div`
  height: ${sizes.size287};
  width: ${sizes.size960};
  display: flex;
  flex-direction: row;
  padding: ${sizes.size0};
`;
const LeftImg = styled.img`
  height: ${sizes.size287};
  width: ${sizes.size469};
  margin: ${sizes.size0};
  padding: ${sizes.size0};
`;

const RightImg = styled.img`
  height: ${sizes.size287};
  width: ${sizes.size469};
  margin: ${sizes.size0} ${sizes.size0} ${sizes.size0} ${sizes.size22};
  padding: ${sizes.size0};
`;
