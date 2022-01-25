import React, { useState } from "react";
import styled from "styled-components";
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
      <AddressCardContainer>
        {data.addressCardDetails.map(
          (item: AddressCardDetailsProps, index: number) => {
            return <AddressCard cardDetails={item} key={index} />;
          }
        )}
      </AddressCardContainer>
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
  min-height: 516px;
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
  color: ${colors.grey_6f6f6f};
  letter-spacing: -0.27px;
`;
const AddressCardContainer = styled.div`
  width: 958px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 14px;
`;
