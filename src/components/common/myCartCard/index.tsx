import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colors,
  sizes,
  fontFamilies,
  angles,
  letterSpacing,
} from "../../../variables";
import data from "../constants.json";
import Label from "../label";
import Buttons from "../button";
import { queries } from "../breakpoints";

interface MyCartCardProps {
  info: {
    id: string;
    restaurantName: string;
    address: string;
    orderDetails: string;
  };
  index: number;
}

const MyCartCard: FC<MyCartCardProps> = ({ info, index }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    return;
  };
  return (
    <Cartcard key={index}>
      <RestaurantName content={info.restaurantName} />
      <RemoveButton name={data.cartData.remove} />
      <RestaurantAddress content={info.address} />
      <OrderDetails content={info.orderDetails} />
      <Link to={""}>
        <ProceedButton name={data.cartContents.proceed} />
      </Link>
    </Cartcard>
  );
};
export default MyCartCard;

const Cartcard = styled.div`
  width: 303px;
  height: 172px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 28px 20px 22px 20px;
  border-radius: 6px;
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  box-sizing: border-box;
  ${queries.tablet} {
    height: 103px;
  }
`;

const RemoveButton = styled(Buttons)`
  height: 15px;
  width: 43px;
  color: ${colors.red_ed1b2e};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
  text-align: right;
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
  box-shadow: none;
  ${queries.tablet} {
    top: 18px;
    right: 12px;
    height: 9px;
    width: 26px;
    line-height: 9px;
    font-size: 7px;
  }
`;

const RestaurantName = styled(Label)`
  color: ${colors.teal_223136};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${letterSpacing.space0};
  ${queries.tablet} {
    line-height: 13px;
    height: 13px;
    font-size: 10px;
  }
`;

const RestaurantAddress = styled(Label)`
  height: "17px";
  color: ${colors.grey_757575};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
  letter-spacing: ${letterSpacing.space0};
  margin-top: "4px";
  ${queries.tablet} {
    line-height: 10px;
    height: 10px;
    font-size: 7px;
  }
`;

const OrderDetails = styled(Label)`
  height: "17px";
  color: ${colors.black_2d2d2d};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
  letter-spacing: ${letterSpacing.space0};
  margin-top: "7px";
  ${queries.tablet} {
    line-height: 10px;
    height: 10px;
    font-size: 7px;
  }
`;

const ProceedButton = styled(Buttons)`
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_e21143_09},
    ${colors.yellow_ffb03a_09}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  position: absolute;
  bottom: 22px;
  right: 21px;
  height:30px;
  width:111px;
  border-radius:15px;
  box-shadow:none;
  font-family:${fontFamilies.fontFamilyOsSemiBold};
  font-size:14px;
  line-height:19px;
  border:1px solid ${colors.pink_e21143_09};
  ${queries.tablet} {
    bottom: 13px;
    right: 13px;
    height: 18px;
    width: 67px;
    line-height: 11px;
    font-size: 8px;
  }
}
`;
