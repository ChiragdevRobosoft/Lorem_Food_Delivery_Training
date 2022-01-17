import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Label from "../label";
import visa from "../../../assets/paymentCard/visa.png";
import visa_bg from "../../../assets/paymentCard/visa_bg.png";
import Checked from "../../../assets/paymentCard/icn_checked.png";
import Unchecked from "../../../assets/paymentCard/icn_uncheck.png";
import { fontFamilies, angles, colors, sizes } from "../../../variables";
import { PaymentCardDetailsProps } from "../interfaces";
const PaymentCard: FC<{ cardDetails: PaymentCardDetailsProps }> = ({
  cardDetails,
}) => {
  const [primaryCheck, setPrimaryCheck] = useState(true);
  return (
    <CardContainer>
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
      <CardDetails>
        <VisaLogo>
          <img src={visa} className="visaLogo"></img>
        </VisaLogo>
        <CardInfo>
          <Label
            content={cardDetails.cardNumber}
            height="28px"
            width="174px"
            color="#2D2D2D"
            fontFamily={fontFamilies.fontFamilyOsRegular}
            fontSize="18px"
            letterSpacing="-0.3px"
            lineHeight="28px"
          />
          <Label
            content={cardDetails.cardType}
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
          content={data.delete}
          height="22px"
          width="30px"
          color="#F57C00"
          font-family={fontFamilies.fontFamilyOsSemiBold}
          font-size="16px"
          letter-spacing="0"
          line-height="22px"
        />
      </EditDeleteButton>
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
  background-image: url(${visa_bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
`;
const iconCheck = styled.img`
  height: 21px;
  width: 21px;
`;
const EditDeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 19px;
  margin-top: 53px;
`;
