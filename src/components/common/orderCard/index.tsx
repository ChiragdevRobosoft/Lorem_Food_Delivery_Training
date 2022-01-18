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
      <DetailsContainer>
        <DeliveryStatusContainer>
          <OrderIdLabel content={data.orderIdText + cardDetails.orderId} />
          <DeliveryStatusLabel content={cardDetails.DeliveryStatus} />
        </DeliveryStatusContainer>
        <RestaurantLabel content={cardDetails.hotelName} />
        <AddressLabel content={cardDetails.address} />
        <ItemsSelected>
          <ItemsLabel content={cardDetails.Items + data.ItemText} />
          <LineBreak />
          <CostLabel content={data.costUnit + cardDetails.Costs} />
        </ItemsSelected>
      </DetailsContainer>
      <ButtonContainer>
        <Buttons
          name={data.details}
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
          name={data.status}
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
  margin-top: 44px;
`;
const OrderIdLabel = styled(Label)`
  height: 30px;
  color: ${colors.black_313131};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${sizes.sizeNeg0_34};
  line-height: ${sizes.size30};
`;
const RestaurantLabel = styled(Label)`
  height: 23px;
  color: ${colors.grey_4c4c4c};
  font-size: ${sizes.size17};
  letter-spacing: ${sizes.sizeNeg0_29};
  line-height: ${sizes.size23};
`;
const AddressLabel = styled(Label)`
  height: 18px;
  color: ${colors.grey_909090};
  font-size: ${sizes.size13};
  letter-spacing: ${sizes.sizeNeg0_26};
  line-height: ${sizes.size18};
`;
const ItemsLabel = styled(Label)`
  height: 19px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
`;
const CostLabel = styled(Label)`
  height: 19px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
`;
const DeliveryStatusLabel = styled(Label)`
  height: 19px;
  color: ${colors.green_72b000};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DeliveryStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;
