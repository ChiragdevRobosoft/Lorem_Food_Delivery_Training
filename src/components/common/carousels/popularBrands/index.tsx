import React, { CSSProperties } from "react";
import KFC from "./../../../../assets/common/carousels/carousel1-img.png";
import prevButton from "./../../../../assets/common/carousels/previousButton.png";
import nextButton from "./../../../../assets/common/carousels/nextButton.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { sizes, colors, fontFamilies } from "./../../../../variables";
import { url } from "inspector";
const Carousel = require("react-responsive-carousel").Carousel;

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
      border: "1px solid blue", //"solid #3E3E3E"
      borderWidth: "0 2px 2px 0",
      display: "inline-block",
      padding: "3.5px",
      boxSizing: "border-box",
      height: "57px",
      width: "56px",
      opacity: 0.5,
    };

    if (direction === "prev") {
      styles.left = 100;
      styles.backgroundImage = "url(${prevButton})";
      styles.transform = "rotate(135deg)";
    } else {
      styles.transform = "rotate(-45deg)";
      styles.right = 10;
      styles.backgroundImage = "url(${nextButton})";
    }

    return <div onClick={onClickHandler} style={styles}></div>;
  };

const CarouselPB = () => {
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
        <img src={KFC} alt="" />
        <img src={KFC} alt="" />
        <img src={KFC} alt="" />
        <img src={KFC} alt="" />
        <img src={KFC} alt="" />
      </Carousel>
    </Wrapper>
  );
};

export default CarouselPB;

const Wrapper = styled.div`
  .main-slide {
    border: 1px solid red;
    height: 240px;
    width: 958px;
    margin: 35px auto auto auto;
    border-radius: 6px;
    background-color: ${colors.white};
  }
  .carousel {
    border: 1px solid green;
    height: 327px;
    width: 958px;
    .slider-wrapper {
      border: 1px solid blue;
      width: 450px;
      height: 240px;
      .grid-display {
        padding: 20px 18px;
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: 4fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        height: 166.79px;
        position: relative;
        .brand-icon {
          height: auto;
          width: auto;
          margin: auto;
        }
        .brand-name {
          height: 19px;
          color: 9px;
          font-family: ${fontFamilies.fontFamilyOsSemiBold};
          font-size: ${sizes.size14};
          letter-spacing: ${sizes.size0};
          line-height: ${sizes.size19};
          text-align: center;
        }
        .brand-description {
          height: 62px;
          color: grey;
          font-family: ${fontFamilies.fontFamilyOs};
          font-size: ${sizes.size14};
          letter-spacing: ${sizes.size0};
          line-height: ${sizes.size19};
          text-align: center;
        }
      }
    }
  }
`;

//box-shadow: 0 ${sizes.size2} ${sizes.size10} ${sizes.size0} black;
// margin-left: auto;
// margin-right: auto;
