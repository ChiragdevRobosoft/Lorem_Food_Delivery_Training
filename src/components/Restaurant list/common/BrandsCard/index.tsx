import React, { CSSProperties } from "react";
import Pizzahut from "../../../../assets/restaurantList/Pizzahut.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../../common/constants.json";
import styled from "styled-components";
import { sizes, colors, fontFamilies } from "../../../../variables";
const Carousel = require("react-responsive-carousel").Carousel;

const renderArrow =
  (direction: string) =>
  (onClickHandler: any, shouldBeEnabled: boolean, label: any) => {
    if (!shouldBeEnabled) {
      return;
    }

    const styles: CSSProperties = {
      position: "absolute",
      top: "45%",
      zIndex: 2,
      border: "solid #3E3E3E",
      borderWidth: "0 2px 2px 0",
      display: "inline-block",
      padding: "3.5px",
      boxSizing: "border-box",
      height: "9.45px",
      width: "4.58px",
      opacity: 0.5,
    };

    if (direction === "prev") {
      styles.left = 10;
      styles.transform = "rotate(135deg)";
    } else {
      styles.transform = "rotate(-45deg)";
      styles.right = 10;
    }

    return <div onClick={onClickHandler} style={styles}></div>;
  };

let details = data.RestaurantList;
console.log(details);

const newData = details.reduce((a: any, c: any, i: number) => {
  return i % 4 === 0 ? (a as any).concat([details.slice(i, i + 4)]) : a;
}, []);
console.log(newData);

const BrandsCard = () => {
  return (
    <Wrapper>
      <Carousel
        renderArrowPrev={renderArrow("prev")}
        renderArrowNext={renderArrow("next")}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        className="main-slide"
      >
        {newData.map((a: any, index: number) => {
          return (
            <div className="grid-display">
              {a.map((b: any, k: number) => {
                return (
                  <>
                    <img src={Pizzahut} className="brand-icon" />
                    <div className="brand-name">{b.name}</div>
                    <div className="brand-outlets">{b.outlets} outlets</div>
                  </>
                );
              })}
            </div>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-slide {
    height: ${sizes.size166_79};
    width: ${sizes.size631_42};
    margin-left: auto;
    margin-right: auto;
    border-radius: ${sizes.size6};
    background-color: ${colors.white};
    box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
      ${colors.black1};
  }
  .carousel {
    height: ${sizes.size166_79};
    width: ${sizes.size631_42};

    .slider-wrapper {
      width: ${sizes.size631_42};
      height: ${sizes.size166_79};

      .grid-display {
        padding: ${sizes.size20} ${sizes.size18};
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: 4fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        height: ${sizes.size166_79};
        position: relative;

        .brand-icon {
          height: auto;
          width: auto;
          margin: auto;
        }

        .brand-name {
          height: ${sizes.size19};
          color: ${colors.grey9};
          font-family: ${fontFamilies.fontFamilyOsSemiBold};
          font-size: ${sizes.size14};
          letter-spacing: ${sizes.size0};
          line-height: ${sizes.size19};
          text-align: center;
        }

        .brand-outlets {
          height: ${sizes.size19};
          color: ${colors.grey10};
          font-family: ${fontFamilies.fontFamilyOsRegular};
          font-size: ${sizes.size14};
          letter-spacing: ${sizes.size0};
          line-height: ${sizes.size19};
          text-align: center;
        }
      }
    }
  }
`;

export default BrandsCard;
