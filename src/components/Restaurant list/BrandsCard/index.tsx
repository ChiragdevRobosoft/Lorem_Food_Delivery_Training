import React, { CSSProperties } from "react";
import Pizzahut from "../../../assets/restaurantList/Pizzahut.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../common/constants.json";
import styled from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  restaurantListProps,
} from "../../../variables";
const Carousel = require("react-responsive-carousel").Carousel;

const renderArrow =
  (direction: string) =>
  (
    onClickHandler: React.MouseEventHandler<HTMLInputElement>,
    shouldBeEnabled: boolean
  ) => {
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

const newData = details.reduce(
  (
    concatedArray: restaurantListProps[][],
    currentValue: restaurantListProps,
    index: number
  ) => {
    return index % 4 === 0
      ? (concatedArray as restaurantListProps[][]).concat([
          details.slice(index, index + 4),
        ])
      : concatedArray;
  },
  []
);

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
        {newData.map((firstArray: restaurantListProps[], index: number) => {
          return (
            <GridDisplay key={index}>
              {firstArray.map(
                (secondArray: restaurantListProps, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      <BrandIcon src={Pizzahut} />
                      <BrandName>{secondArray.name}</BrandName>
                      <BrandOutlets>{secondArray.outlets} outlets</BrandOutlets>
                    </React.Fragment>
                  );
                }
              )}
            </GridDisplay>
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
    margin-bottom: 17.14px;
    margin-top: 14px;
  }
  .carousel {
    height: ${sizes.size166_79};
    width: ${sizes.size631_42};
  }

  .slider-wrapper {
    width: ${sizes.size631_42};
    height: ${sizes.size166_79};
  }
`;

const GridDisplay = styled.div`
  width: ${sizes.size631_42};
  height: ${sizes.size166_79};
  padding: ${sizes.size20} ${sizes.size18};
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 4fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: ${sizes.size166_79};
  position: relative;
`;

const BrandIcon = styled.img`
  height: 72px;
  width: 77px;
  margin: auto;
  object-fit: none;
`;

const BrandName = styled.div`
  height: ${sizes.size19};
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  text-align: center;
`;

const BrandOutlets = styled.div`
  height: ${sizes.size19};
  color: ${colors.grey10};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  text-align: center;
`;

export default BrandsCard;
