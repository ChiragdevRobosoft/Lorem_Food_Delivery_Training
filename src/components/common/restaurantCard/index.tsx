import React, { FC } from "react";
import Menu from "../../../assets/restaurantList/menu.png";
import styled from "styled-components";
import { sizes, colors, fontFamilies, opacity } from "../../../variables";
import Bitmap from "../../../assets/restaurantList/Bitmap.png";
import { Link } from "react-router-dom";

interface RestauarantCardprops {
  card: {
    name: string;
    rating: number;
    address: string;
    variety: string;
    availabilityInfo: string;
    detailsList: string[];
  };
}

interface Props {
  type: boolean;
}

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
        <OpenClose type={card.availabilityInfo.includes("Open") ? true : false}>
          {card.availabilityInfo}
        </OpenClose>
        <DetailsList>
          {card.detailsList.map((detail) => {
            return <Detail>{detail}</Detail>;
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
  height: ${sizes.size166_79};
  width: ${sizes.size631_42};
  border-radius: ${sizes.size6};
  background-color: ${colors.white};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black1};
  margin-bottom: 10.99px;
`;

const FoodImage = styled.img`
  margin-left: ${sizes.size15_73};
`;

const Rating = styled.div`
  top: ${sizes.size8_88};
  right: ${sizes.size10};
  position: absolute;
  height: ${sizes.size27_25};
  width: ${sizes.size43_6};
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
  right: ${sizes.size8_42};
  bottom: ${sizes.size16};
`;

const ColumnFlex = styled.div`
  margin-right: ${sizes.size10};
  margin-left: ${sizes.size15};
  padding-top: ${sizes.size15_92};
  width: ${sizes.fullWidth};
  height: ${sizes.width90p};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RestaurantName = styled.div`
  height: ${sizes.size30};
  color: ${colors.blue1};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size30};
  top: ${sizes.size15_92};
`;

const RestaurantAddress = styled.div`
  height: ${sizes.size17};
  color: ${colors.grey6};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

const HorizontalLine = styled.hr`
  margin: ${sizes.size0};
  box-sizing: border-box;
  height: ${sizes.size2};
  width: ${sizes.fullWidth};
  border: ${sizes.size1} solid ${colors.grey3};
  opacity: ${opacity.opacity0_19};
  margin-top: ${sizes.size5};
  margin-bottom: ${sizes.size4_5};
`;

const FoodVariety = styled.div`
  height: ${sizes.size17};
  color: ${colors.grey7};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-bottom: ${sizes.size5};
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${sizes.size9};
  width: ${sizes.width70p};
  height: ${sizes.size17};
  color: ${colors.grey8};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  align-items: flex-start;
  justify-content: space-between;
  padding: ${sizes.size0};
  margin-left: ${sizes.size15};
  margin-top: ${sizes.size2};
  bottom: ${sizes.size0};
`;

const Detail = styled.li`
  text-indent: ${sizes.sizeNeg7};
`;

const OpenClose = styled.div<Props>`
  height: ${sizes.size17};
  color: ${(props) =>
    props.type === true ? `${colors.green1}` : `${colors.red1}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
`;

export default RestaurantCard;
