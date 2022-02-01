import React, { CSSProperties } from "react";
import ChickenTikka from "../../../assets/restaurantList/ChickenTikka.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../common/constants.json";
import styled from "styled-components";
import { sizes, colors, fontFamilies } from "../../../variables";
import { restaurantListProps } from "../../common/interfaces";
import { queries } from "../../common/breakpoints";
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
      border: `solid ${colors.grey_3e3e3e}`,
      borderWidth: `0 ${sizes.size2} ${sizes.size2} 0`,
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
                    <Brands key={index}>
                      <BrandIcon src={ChickenTikka} />
                      <BrandName>{secondArray.name}</BrandName>
                      <BrandOutlets>{secondArray.outlets}</BrandOutlets>
                    </Brands>
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
    height: 166.79px;
    width: 631.42px;
    min-height: 166.79px;
    margin-left: auto;
    margin-right: auto;
    border-radius: ${sizes.size6};
    background-color: ${colors.white_ffffff};
    box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
      ${colors.black_000000_1};
    margin-bottom: 17.14px;
    margin-top: 14px;
    max-width: 631.42px;
    ${queries.tabletLandscape} {
      width: auto;
      height: auto;
    }
  }
  .carousel {
    height: 166.79px;
    width: 631.42px;
    min-height: 166.79px;
    ${queries.tabletLandscape} {
      width: auto;
      height: auto;
    }
  }
  .slider-wrapper {
    width: 631.42px;
    height: 166.79px;
    min-height: 166.79px;
    ${queries.tabletLandscape} {
      width: auto;
      height: auto;
    }
  }
`;

const GridDisplay = styled.div`
  width: 631.42px;
  height: 166.79px;
  min-height: 166.79px;
  padding: 28px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  ${queries.tabletLandscape} {
    width: auto;
    height: auto;
  }
`;

const Brands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${queries.tabletLandscape} {
    width: auto;
    height: auto;
  }
`;

const BrandIcon = styled.img`
  margin: auto;
  object-fit: none;
`;

const BrandName = styled.div`
  height: ${sizes.size19};
  color: ${colors.grey_2d2d2d};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  text-align: center;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size17};
    height: auto;
  }
  ${queries.tablet} {
    line-height: ${sizes.size15};
    font-size: ${sizes.size11}
    height: auto;
  }
`;

const BrandOutlets = styled.div`
  height: ${sizes.size19};
  color: ${colors.grey_777777};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  text-align: center;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size17};
    height: auto;
  }
  ${queries.tablet} {
    line-height: ${sizes.size15};
    font-size: ${sizes.size11}
    height: auto;
  }
`;

export default BrandsCard;
