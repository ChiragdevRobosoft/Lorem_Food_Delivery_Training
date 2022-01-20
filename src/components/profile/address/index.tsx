import React, { useState } from "react";
import styled from "styled-components";
import FoodCard from "../../common/FoodCard";
import SearchIcon from "../../../assets/restaurantDetails/icon_search.png";
import data from "../../common/constants.json";
import { fontFamilies, colors, sizes, opacity } from "../../../variables";
import { AddressCardDetailsProps } from "../../common/interfaces";
import AddressCard from "../../common/addressCard";
import Label from "../../common/label";

const Address = () => {
  return (
    <Wrapper>
      <AddAddressBar>
        <AddressLabel content={data.myAddress} />
        <AddAddressLabel content={data.AddNew} />
      </AddAddressBar>
      <OrdersContainer>
        {data.addressCardDetails.map(
          (item: AddressCardDetailsProps, index: number) => {
            return <AddressCard cardDetails={item} key={index} />;
          }
        )}
      </OrdersContainer>
    </Wrapper>
  );
};
export default Address;

const Wrapper = styled.div`
  width: 958px;
  position: relative;
  padding-bottom: 76px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 84px;
`;
const AddAddressBar = styled.div`
  display: flex;
  flew-direction: row;

  gap: 752px;
`;
const AddAddressLabel = styled(Label)`
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
`;
const AddressLabel = styled(Label)`
  height: 22px;
  color: #6f6f6f;
  letter-spacing: -0.27px;
`;
const OrdersContainer = styled.div`
  width: 958px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;
`;
