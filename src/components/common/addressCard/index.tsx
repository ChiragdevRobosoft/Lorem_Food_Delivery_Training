import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Label from "../label";
import Unchecked from "../../../assets/addressCard/icn_uncheck.png";
import Checked from "../../../assets/addressCard/icn_check.png";
import { fontFamilies, angles, colors, sizes } from "../../../variables";
import { AddressCardDetailsProps } from "../interfaces";
const AddressCard: FC<{ cardDetails: AddressCardDetailsProps }> = ({
  cardDetails,
}) => {
  const [primaryCheck, setPrimaryCheck] = useState(true);
  return (
    <CardContainer>
      <Label
        content={cardDetails.place}
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
          content={cardDetails.address}
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
          content={data.edit}
          height="22px"
          width="30px"
          color="#F57C00"
          font-family={fontFamilies.fontFamilyOsSemiBold}
          font-size="16px"
          letter-spacing="0"
          line-height="22px"
        />
        <Label
          content={data.Delete}
          height="22px"
          width="30px"
          color="#F57C00"
          font-family={fontFamilies.fontFamilyOsSemiBold}
          font-size="16px"
          letter-spacing="0"
          line-height="22px"
        />
      </EditDeleteButton>

      <TickBox onClick={() => setPrimaryCheck(!primaryCheck)}>
        <img
          src={primaryCheck === true ? Checked : Unchecked}
          className="checked"
        ></img>
        <Label
          content="Primary"
          height="19px"
          width="52px"
          color={primaryCheck === true ? "#6a6a6a" : "#B8B8B8"}
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          fontSize="14px"
          letterSpacing="-0.27px"
          lineHeight="19px"
          marginLeft="11px"
        />
      </TickBox>
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
const TickBox = styled.div`
  text-align: right;
  position: absolute;
  top: 21px;
  right: 20px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
