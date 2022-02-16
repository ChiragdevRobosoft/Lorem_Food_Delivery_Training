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
        styles.right = 58;
        styles.borderRight = `${sizes.size0_5} solid rgba(151px, 151px, 151px, ${sizes.size0_29})`;
      } else {
        styles.right = 0;
        styles.transform = "scaleX(-1)";
        styles.borderRight = `${sizes.size0_5} solid rgba(151px, 151px, 151px, ${sizes.size0_29})`;
      }
      return <div style={styles}></div>;
    }

    if (direction === "prev") {
      styles.right = 58;
      styles.transform = "scaleX(-1)";
      styles.borderLeft = `${sizes.size0_5} solid rgba(151px, 151px, 151px, ${sizes.size0_29})`;
    } else {
      styles.right = 0;
      styles.borderLeft = `${sizes.size0_5} solid rgba(151px, 151px, 151px, ${sizes.size0_29})`;
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
              <LeftImg className="left-image" src={card1} alt="" />
              <RightImg className="right-image" src={card1} alt="" />
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
    height: 287px;
    width: 100%;
    margin: 0 0;
    border-radius: 6px;
    background-color: linear-gradient(
      ${angles.angle178_89},
      ${colors.white_ffffff} 0%,
      ${colors.blue_f4f6ff} 100%
    );
    padding: ${sizes.size0};
  }
  .carousel {
    height: 363px;
    width: 100%;
    padding: 0;
    .slider-wrapper {
      width: 100%;
      height: 287px;
      padding: 0;
    }
    .slide .left-image {
      width: 469px;
    }
    .slide .right-image {
      width: 469px;
    }
  }
`;

const SingleSlide = styled.div`
  height: 287px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0;
`;
const LeftImg = styled.img`
  width: ${sizes.size469};
  margin: ${sizes.size0};
  padding: ${sizes.size0};
`;

const RightImg = styled.img`
  width: ${sizes.size469};
  margin: 0 0 0 22px;
  padding: 0px;
`;
