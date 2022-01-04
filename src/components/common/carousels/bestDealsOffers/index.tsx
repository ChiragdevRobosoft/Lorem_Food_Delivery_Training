import { CSSProperties } from "react";
import nextButton from "./../../../../assets/common/carousels/next_button.png";
import disabledNextButton from "./../../../../assets/common/carousels/nextButtonDisabled.png";
import card1 from "./../../../../assets/common/carousels/Card1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { sizes, colors, angles } from "./../../../../variables";
import data from "./../../constants.json";
import { AllBrands as AllOffers, RouteText, Arrowspan } from "../popularBrands";
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
  (
    onClickHandler: React.MouseEventHandler<HTMLInputElement>,
    shouldBeEnabled: boolean
  ) => {
    const styles: CSSProperties = {
      position: "absolute",
      bottom: 0,
      right: 0,
      zIndex: 2,
      display: "inline-block",
      boxSizing: "border-box",
      height: `${sizes.size57}`,
      width: `${sizes.size56}`,
      backgroundImage: `url(${nextButton})`,
      backgroundPosition: "center",
    };

    if (!shouldBeEnabled) {
      styles.backgroundImage = `url(${disabledNextButton})`;

      if (direction === "prev") {
        styles.left = 849;
        styles.borderRight = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
      } else {
        styles.right = 0;
        styles.transform = "scaleX(-1)";
        styles.borderRight = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
      }
      return <div style={styles}></div>;
    }

    if (direction === "prev") {
      styles.left = 849;
      styles.transform = "scaleX(-1)";
      styles.borderLeft = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
    } else {
      styles.right = 0;
      styles.borderLeft = `${sizes.size0_5} solid rgba(${sizes.size151}, ${sizes.size151}, ${sizes.size151}, ${sizes.size0_29})`;
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
          return (
            <SingleSlide key={i}>
              <LeftImg src={card1} alt="" />
              <RightImg src={card1} alt="" />
            </SingleSlide>
          );
        })}
      </Carousel>
      <AllOffers width={`${sizes.size223_61}`} margin={`${sizes.size19}`}>
        <RouteText
          height={`${sizes.size22}`}
          width={`${sizes.size130}`}
          textAlign="left"
        >
          {data.carousels.bestDealsOffers.routeText}
        </RouteText>
        <Arrowspan>
          <b>&#62;</b>
        </Arrowspan>
      </AllOffers>
    </Wrapper>
  );
};

export default CarouselBDO;

const Wrapper = styled.div`
  .main-slide {
    height: ${sizes.size287};
    width: ${sizes.size960};
    margin: ${sizes.size0} ${sizes.size0} ${sizes.size0} ${sizes.size0};
    border-radius: ${sizes.size6};
    background-color: linear-gradient(
      ${angles.angle178_89},
      ${colors.white} 0%,
      ${colors.lightblue2} 100%
    );
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
