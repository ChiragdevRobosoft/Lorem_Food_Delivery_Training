import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import data from "../constants.json";
import Label from "../label";
import visa from "../../../assets/paymentCard/visa.png";
import visa_bg from "../../../assets/paymentCard/visa_bg.png";
import Checked from "../../../assets/paymentCard/icn_checked.png";
import Unchecked from "../../../assets/paymentCard/icn_uncheck.png";
import {
  fontFamilies,
  angles,
  colors,
  sizes,
  letterSpacing,
} from "../../../variables";
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
          color={
            primaryCheck === true
              ? `${colors.grey_6a6a6a}`
              : `${colors.grey_8b8b8b}`
          }
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          fontSize={sizes.size14}
          letterSpacing={letterSpacing.spaceNeg0_27}
          lineHeight={sizes.size19}
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
            color={colors.black_2D2D2D}
            fontFamily={fontFamilies.fontFamilyOsRegular}
            fontSize={sizes.size18}
            letterSpacing={letterSpacing.spaceNeg0_3}
            lineHeight={sizes.size28}
          />
          <Label
            content={cardDetails.cardType}
            height="19px"
            width="120px"
            color={colors.grey_6a6a6a}
            fontFamily={fontFamilies.fontFamilyOsRegular}
            fontSize={sizes.size14}
            letterSpacing={letterSpacing.spaceNeg0_27}
            lineHeight={sizes.size19}
            marginTop="4px"
          />
        </CardInfo>
      </CardDetails>
      <EditDeleteButton>
        <Label
          content={data.edit}
          height="22px"
          width="30px"
          color={colors.orange_f57c00}
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          fontSize={sizes.size16}
          letterSpacing={letterSpacing.space0}
          lineHeight={sizes.size22}
        />
        <Label
          content={data.delete}
          height="22px"
          width="30px"
          color={colors.orange_f57c00}
          fontFamily={fontFamilies.fontFamilyOsSemiBold}
          fontSize={sizes.size16}
          letterSpacing={letterSpacing.space0}
          lineHeight={sizes.size22}
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
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  padding: 22px 19px 21px 24px;
  background-image: url(${visa_bg});
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: fill;
`;
const VisaLogo = styled.div`
  height: 24.65px;
  width: 76.64px;
  margin-top: 8px;
`;
const CardInfo = styled.div`
  margin-left: 30.36px;
`;
const TickBox = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
`;
const EditDeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 19px;
  margin-top: 30px;
`;
