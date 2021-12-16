import React, { FC } from "react";
import Menu from "../../../assets/restaurantList/menu.png";
import styled from "styled-components";
import { sizes, colors, fontFamilies, opacity } from "../../../variables";

interface RestauarantCardprops {
  card: {
    name: string;
    rating: number;
    address: string;
    variety: string;
    availabilityInfo: string;
    detailsList: string[];
    image: string;
  };
}

interface Props {
  type: boolean;
}

const RestaurantCard: FC<RestauarantCardprops> = ({ card }) => {
  return (
    <Wrapper>
      <img src={card.image} className="food1" alt="" />
      <div className="rating">{card.rating}</div>
      <img src={Menu} className="menu" alt="" />
      <div className="column-flex">
        <div className="restaurant-name">{card.name}</div>
        <div className="restaurant-address">{card.address}</div>
        <hr />
        <div className="food-variety">{card.variety}</div>
        <OpenClose type={card.availabilityInfo.includes("Open") ? true : false}>
          {card.availabilityInfo}
        </OpenClose>
        <ul className="details-list">
          {card.detailsList.map((detail) => {
            return <li>{detail}</li>;
          })}
        </ul>
      </div>
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

  .food1 {
    margin-left: ${sizes.size15_73};
  }

  .rating {
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
  }

  .menu {
    position: absolute;
    right: ${sizes.size8_42};
    bottom: ${sizes.size16};
  }

  .column-flex {
    margin-right: ${sizes.size10};
    margin-left: ${sizes.size15};
    padding-top: ${sizes.size15_92};
    width: ${sizes.fullWidth};
    height: ${sizes.width90p};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .restaurant-name {
      height: ${sizes.size30};
      color: ${colors.blue1};
      font-family: ${fontFamilies.fontFamilyOsSemiBold};
      font-size: ${sizes.size22};
      font-weight: bold;
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size30};
      top: ${sizes.size15_92};
    }

    .restaurant-address {
      height: ${sizes.size17};
      color: ${colors.grey6};
      font-family: ${fontFamilies.fontFamilyOsSemiBold};
      font-size: ${sizes.size12};
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size17};
    }

    hr {
      margin: ${sizes.size0};
      box-sizing: border-box;
      height: ${sizes.size2};
      width: ${sizes.fullWidth};
      border: ${sizes.size1} solid ${colors.grey3};
      opacity: ${opacity.opacity0_19};
      margin-top: ${sizes.size5};
      margin-bottom: ${sizes.size4_5};
    }

    .food-variety {
      height: ${sizes.size17};
      color: ${colors.grey7};
      font-family: ${fontFamilies.fontFamilyOsSemiBold};
      font-size: ${sizes.size14};
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size17};
      margin-bottom: ${sizes.size5};
    }

    .details-list {
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
    }

    li {
      text-indent: ${sizes.sizeNeg7};
    }
  }
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
