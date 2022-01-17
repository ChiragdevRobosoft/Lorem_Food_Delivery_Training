import React, { FC, useContext } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Buttons from "../../common/button";
import Label from "../label";
import { fontFamilies, angles, colors, sizes } from "../../../variables";
import { orderCardProps } from "../interfaces";
const OrderCard: FC<{ cardDetails: orderCardProps }> = ({ cardDetails }) => {
  return (
    <CardContainer>
      <Label
        content={data.orderIdText + cardDetails.orderId}
        height="30px"
        width="220px"
        color={colors.black_313131}
        fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
        fontSize={sizes.size22}
        letterSpacing={sizes.sizeNeg0_34}
        lineHeight={sizes.size30}
        marginBottom="10px"
      />
      <Label
        content={cardDetails.hotelName}
        height="23px"
        width="165px"
        color={colors.grey_4c4c4c}
        fontFamily={`${fontFamilies.fontFamilyOsRegular}`}
        fontSize={sizes.size17}
        letterSpacing={sizes.sizeNeg0_29}
        lineHeight={sizes.size23}
        marginTop="10px"
      />
      <Label
        content={cardDetails.address}
        height="18px"
        width="188px"
        color={colors.grey_909090}
        font-family={`${fontFamilies.fontFamilyOsRegular}`}
        font-size={sizes.size13}
        letter-spacing={sizes.sizeNeg0_26}
        line-height={sizes.size18}
        margin-top="10px"
      />
      <ItemsSelected>
        <Label
          content={cardDetails.Items + data.ItemText}
          height="19px"
          color={colors.grey_4c4c4c}
          fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
          fontSize={sizes.size14}
          letterSpacing="0"
          lineHeight={sizes.size19}
          width="none"
        />
        <LineBreak />
        <Label
          content={data.costUnit + cardDetails.Costs}
          height="19px"
          color={colors.grey_4c4c4c}
          fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
          fontSize={sizes.size14}
          letterSpacing="0"
          lineHeight={sizes.size19}
          width="none"
        />
      </ItemsSelected>
      <Delivery>Out for Delivery</Delivery>
      <ButtonContainer>
        <Buttons
          name="DETAILS"
          borderRadius={sizes.size18}
          width="111px"
          height="36px"
          border={`1px solid ${colors.grey_7b7676}`}
          color={colors.grey_7b7676}
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          boxShadow={`0 4px 10px 0 ${colors.black_000000_007}`}
          marginLeft="0"
          marginRight="0"
        />
        <Buttons
          name="STATUS"
          borderRadius={sizes.size18}
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
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
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
  border: 1px solid ${colors.grey_4c4c4c};
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
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
  color: ${colors.green_72b000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold}
  font-size: ${sizes.size14};
  letter-spacing: 0;
  line-height: ${sizes.size19};
  text-align: right;
  position: absolute;
  right: 31px;
  top: 37px;
`;
