import React, { FC, useContext } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Label from "../label";
import visa from "../../../assets/paymentCard/visa.png";
import visa_bg from "../../../assets/paymentCard/visa_bg.png";
import { fontFamilies, angles, colors, sizes } from "../../../variables";
const PaymentCard = () => {
  return (
    <CardContainer>
      <TickBox>
        <Label
          content="Primary"
          height="19px"
          width="52px"
          color="#6a6a6a"
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          fontSize="14px"
          letterSpacing="-0.27px"
          lineHeight="19px"
        />
      </TickBox>
      <CardDetails>
        <VisaLogo>
          <img src={visa} className="visaLogo"></img>
        </VisaLogo>
        <CardInfo>
          <Label
            content="2345 XXXX XXXX 6574"
            height="28px"
            width="174px"
            color="#2D2D2D"
            fontFamily={fontFamilies.fontFamilyOsRegular}
            fontSize="18px"
            letterSpacing="-0.3px"
            lineHeight="28px"
          />
          <Label
            content="American Experess"
            height="19px"
            width="120px"
            color="#6A6A6A"
            fontFamily={fontFamilies.fontFamilyOsRegular}
            fontSize="14px"
            letterSpacing="-0.27px"
            lineHeight="19px"
            marginTop="4px"
          />
        </CardInfo>
      </CardDetails>
    </CardContainer>
  );
};
export default PaymentCard;

const CardContainer = styled.div`
  height: 166px;
  width: 469px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 22px 19px 21px 24px;
`;
const VisaLogo = styled.div`
  height: 24.65px;
  width: 76.64px;
  margin-top: 50px;
`;
const CardInfo = styled.div`
  margin-left: 30.36px;
  margin-top: 42px;
`;
const TickBox = styled.div`
  text-align: right;
  position: absolute;
  top: 21px;
  right: 20px;
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
`;
const iconCheck = styled.img`
  height: 21px;
  width: 21px;
`;
