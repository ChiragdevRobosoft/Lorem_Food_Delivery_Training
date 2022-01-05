import React, { FC } from "react";
import Menu from "../../../assets/common/restaurantCard/menu.png";
import styled from "styled-components";
import {
  sizes,
  colors,
  fontFamilies,
  opacity,
  RestauarantCardprops,
} from "../../../variables";
import Bitmap from "../../../assets/common/restaurantCard/Bitmap.png";
import { Link } from "react-router-dom";

const RestaurantCard: FC<RestauarantCardprops> = ({ card }) => {
  return (
    <Wrapper>
      <FoodImage src={Bitmap} alt="" />
      <Rating>{card.rating}</Rating>
      <Link to="/menu">
        <MenuImage src={Menu} alt="" />
      </Link>
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
  border-radius: ${sizes.size6};
  background-color: ${colors.white};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black1};
  margin-bottom: 10.99px;
`;

const FoodImage = styled.img`
  margin-left: 15.73px;
`;

const Rating = styled.div`
  top: 8.88px;
  right: 10px;
  position: absolute;
  height: 27.25px;
  width: 43.6px;
  border-radius: ${sizes.size4};
  background-color: ${colors.yellow3};
  color: ${colors.white};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27_25};
  text-align: center;
  justify-content: center;
`;

const MenuImage = styled.img`
  position: absolute;
  z-index: 1;
  right: 8.42px;
  bottom: ${sizes.size16};
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
`;

const RestaurantName = styled.div`
  height: 30px;
  color: ${colors.blue1};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size30};
  top: 15.92px;
`;

const RestaurantAddress = styled.div`
  height: 17px;
  color: ${colors.grey6};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

const HorizontalLine = styled.hr`
  margin: 0;
  box-sizing: border-box;
  height: 2px;
  width: ${sizes.fullWidth};
  border: ${sizes.size1} solid ${colors.grey3};
  opacity: ${opacity.opacity0_19};
  margin-top: 5px;
  margin-bottom: 4.5px;
`;

const FoodVariety = styled.div`
  height: 17px;
  color: ${colors.grey7};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-bottom: 5px;
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 9px;
  width: 70%;
  height: 17px;
  color: ${colors.grey8};
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
`;

const Detail = styled.li`
  text-indent: ${sizes.sizeNeg7};
`;

const OpenClose = styled.div<{ color: string }>`
  height: ${sizes.size17};
  color: ${(props) =>
    props.color === "green" ? `${colors.green1}` : `${colors.red1}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

export default RestaurantCard;
