import React, { FC } from "react";
import Menu from "../../../assets/common/restaurantCard/menu.png";
import styled from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  opacity,
  links,
} from "../../../variables";
import FoodIcon from "../../../assets/common/restaurantCard/food.png";
import { RestauarantCardprops } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { queries } from "../breakpoints";

const RestaurantCard: FC<RestauarantCardprops> = ({ card }) => {
  let navigate = useNavigate();
  const handleRedirect = () => {
    localStorage.setItem("restaurant", JSON.stringify(card));
    navigate(`${links.menuFromList}/${card.name.split(" ").join("-")}`);
  };
  return (
    <Wrapper>
      <FoodImage src={FoodIcon} alt="" />
      <Rating>{card.rating}</Rating>
      <MenuImage src={Menu} alt="" onClick={handleRedirect} />
      <ColumnFlex>
        <RestaurantName>{card.name}</RestaurantName>
        <RestaurantAddress>{card.address}</RestaurantAddress>
        <HorizontalLine />
        <FoodVariety>{card.variety}</FoodVariety>
        <OpenClose
          color={card.availabilityInfo.includes("Open") ? "green" : "red"}
        >
          {card.availabilityInfo}
        </OpenClose>
        <DetailsList>
          {card.detailsList.map((detail, index) => {
            return <Detail key={index}>{detail}</Detail>;
          })}
        </DetailsList>
      </ColumnFlex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 166.79px;
  width: 631.42px;
  min-height: 166.79px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black_000000_1};
  margin-bottom: 10.99px;
  ${queries.tabletLandscape} {
    width: auto;
    height: auto;
  }
`;

const FoodImage = styled.img`
  margin-left: 15.73px;
  ${queries.tabletLandscape} {
    height: 120.48px;
    width: 125.82px;
  }
`;

const Rating = styled.div`
  top: 8.88px;
  right: 10px;
  position: absolute;
  height: 27.25px;
  width: 43.6px;
  border-radius: ${sizes.size4};
  background-color: ${colors.yellow_f5a623};
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27_25};
  text-align: center;
  justify-content: center;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size11};
    line-height: ${sizes.size18};
    height: ${sizes.size18};
    width: 33.6px;
  }
`;

const MenuImage = styled.img`
  position: absolute;
  z-index: 1;
  right: 8.42px;
  bottom: ${sizes.size16};
  ${queries.tabletLandscape} {
    height: 30.43px;
    width: 90.14px;
  }
  ${queries.tablet} {
    height: 25.43px;
    width: 70.14px;
  }
`;

const ColumnFlex = styled.div`
  margin-right: 10px;
  margin-left: 15px;
  padding-top: 15.92px;
  width: ${sizes.fullWidth};
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${queries.tabletLandscape} {
    padding-top: 0;
  }
`;

const RestaurantName = styled.div`
  height: 30px;
  color: ${colors.blue_223136};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size30};
  top: 15.92px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size18};
  }
  ${queries.tablet} {
    font-size: ${sizes.size14};
    height: auto;
    line-height: 20px;
  }
`;

const RestaurantAddress = styled.div`
  height: 17px;
  color: ${colors.grey_858484_9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  ${queries.tabletLandscape} {
    font-size: ${sizes.size11};
  }
  ${queries.tablet} {
    font-size: ${sizes.size9};
  }
`;

const HorizontalLine = styled.hr`
  margin: 0;
  box-sizing: border-box;
  height: 2px;
  width: ${sizes.fullWidth};
  border: ${sizes.size1} solid ${colors.grey_979797};
  opacity: ${opacity.opacity0_19};
  margin-top: 5px;
  margin-bottom: 4.5px;
  ${queries.tabletLandscape} {
    margin: 0;
  }
`;

const FoodVariety = styled.div`
  height: 17px;
  color: ${colors.grey_9f9f9f_9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-bottom: 5px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
  }
  ${queries.tablet} {
    font-size: ${sizes.size10};
  }
`;

const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: 17px;
  color: ${colors.grey_757575_9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  align-items: flex-start;
  justify-content: space-between;
  padding: ${sizes.size0};
  margin-left: 15px;
  margin-top: 2px;
  bottom: 0;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size11};
    line-height: ${sizes.size13};
    height: ${sizes.size13};
    row-gap: 3px;
  }
  ${queries.tablet} {
    font-size: ${sizes.size9};
    line-height: ${sizes.size11};
  }
`;

const Detail = styled.li`
  text-indent: ${sizes.sizeNeg7};
  white-space: nowrap;
`;

const OpenClose = styled.div<{ color: string }>`
  height: ${sizes.size17};
  color: ${(props) =>
    props.color === "green"
      ? `${colors.green_5fb700}`
      : `${colors.red_ff0d0d}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  ${queries.tablet} {
    font-size: ${sizes.size11};
    line-height: ${sizes.size12};
    height: ${sizes.size12};
  }
`;

export default RestaurantCard;
