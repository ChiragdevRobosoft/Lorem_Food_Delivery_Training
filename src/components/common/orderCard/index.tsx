import React, { FC, useContext } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Buttons from "../../common/button";
import Label from "../label";
import { fontFamilies, angles, colors } from "../../../variables";
import { orderCardProps } from "../interfaces";
const OrderCard: FC<{ cardDetails: orderCardProps }> = ({ cardDetails }) => {
  return (
    <CardContainer>
      <Label
        content={data.orderIdText + cardDetails.orderId}
        height="30px"
        width="220px"
        color="#313131"
        fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
        fontSize="22px"
        letterSpacing="-0.34px"
        lineHeight="30px"
        marginBottom="10px"
      />
      <Label
        content={cardDetails.hotelName}
        height="23px"
        width="165px"
        color="#4c4c4c"
        fontFamily={`${fontFamilies.fontFamilyOsRegular}`}
        fontSize="17px"
        letterSpacing="-0.29px"
        lineHeight="23px"
        marginTop="10px"
      />
      <Label
        content={cardDetails.address}
        height="18px"
        width="188px"
        color="#909090"
        font-family={`${fontFamilies.fontFamilyOsRegular}`}
        font-size="13px"
        letter-spacing="-0.26px"
        line-height="18px"
        margin-top="10px"
      />
      <ItemsSelected>
        <Label
          content={cardDetails.Items + data.ItemText}
          height="19px"
          color="#4c4c4c"
          fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
          fontSize="14px"
          letterSpacing="0"
          lineHeight="19px"
          width="none"
        />{" "}
        <LineBreak />{" "}
        <Label
          content={data.costUnit + cardDetails.Costs}
          height="19px"
          color="#4c4c4c"
          fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
          fontSize="14px"
          letterSpacing="0"
          lineHeight="19px"
          width="none"
        />
      </ItemsSelected>
      <Delivery>Out for Delivery</Delivery>
      <ButtonContainer>
        <Buttons
          name="DETAILS"
          borderRadius="18px"
          width="111px"
          height="36px"
          border="1px solid #7B7676"
          color="#7B7676"
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          boxShadow={`0 4px 10px 0 ${colors.black_000000_007}`}
          marginLeft="0"
          marginRight="0"
        />
        <Buttons
          name="STATUS"
          borderRadius="18px"
          width="111px"
          height="36px"
          border={`1px solid ${colors.pink_e21143_09}`}
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          boxShadow={`0 4px 10px 0 ${colors.black_000000_007}`}
          marginLeft="0"
          marginRight="0"
          color={colors.pink_e21143_09}
        />
      </ButtonContainer>
    </CardContainer>
  );
};
export default OrderCard;

const CardContainer = styled.div`
  height: 248px;
  width: 469px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 27px 31px 21px 30px;
  box-sizing: border-box;
  position: relative;
`;
const ItemsSelected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 44px;
  width: 136px;
  justify-content: space-between;
`;
const LineBreak = styled.hr`
  height: 15px;
  box-sizing: border-box;
  border: 1px solid #4c4c4c;
  margin: 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-directiom: row;
  justify-content: flex-end;
  gap: 19px;
`;
const Delivery = styled.div`
  height: 19px;
  width: 108px;
  color: #72b000;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 19px;
  text-align: right;
  position: absolute;
  right: 31px;
  top: 37px;
`;
