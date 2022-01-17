import React, { FC, useContext } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Label from "../label";
import iconUncheck from "../../../assets/addressCard/icn_uncheck.png";
import iconCheck from "../../../assets/addressCard/icn_check.png";
import { fontFamilies, angles, colors, sizes } from "../../../variables";
const AddressCard = () => {
  return (
    <CardContainer>
      <Label
        content="Home"
        height="19px"
        width="39px"
        color="#6A6A6A"
        fontFamily={fontFamilies.fontFamilyOsRegular}
        fontSize="14px"
        letterSpacing="-0.27px"
        lineHeight="19px"
      />
      <AddressBox>
        <Label
          content="Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai - United Arab EmiratesDubai, UAE"
          height="84px"
          width="387px"
          color="#2D2D2D"
          fontFamily={fontFamilies.fontFamilyOsRegular}
          fontSize="18px"
          letterSpacing="-0.3px"
          lineHeight="28px"
        />
      </AddressBox>
      <EditDeleteButton>
        <Label
          content="Edit"
          height="22px"
          width="30px"
          color="#F57C00"
          font-family={fontFamilies.fontFamilyOsSemiBold}
          font-size="16px"
          letter-spacing="0"
          line-height="22px"
        />
        <Label
          content="Delete"
          height="22px"
          width="30px"
          color="#F57C00"
          font-family={fontFamilies.fontFamilyOsSemiBold}
          font-size="16px"
          letter-spacing="0"
          line-height="22px"
        />
      </EditDeleteButton>
      <PrimaryAddress>Primary</PrimaryAddress>
    </CardContainer>
  );
};
export default AddressCard;

const CardContainer = styled.div`
  height: 186px;
  width: 469px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 29px 19px 21px 26px;
  box-sizing: border-box;
  position: relative;
`;
const AddressBox = styled.div`
  height: 84px;
  width: 387px;
  margin-top: 11px;
`;
const EditDeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 19px;
  margin-bottom: 21px;
`;
const PrimaryAddress = styled.div`
  text-align: right;
  position: absolute;
  top: 21px;
  right: 20px;
  height: 19px;
  width: 52px;
  color: #6a6a6a;
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: 14px;
  letter-spacing: -0.27px;
  line-height: 19px;
`;
const iconCheck = styled.img`
  height: 21px;
  width: 21px;
`;
