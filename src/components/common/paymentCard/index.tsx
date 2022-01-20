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
import Image from "../image";

const PaymentCard: FC<{ cardDetails: PaymentCardDetailsProps }> = ({
  cardDetails,
}) => {
  const [primaryCheck, setPrimaryCheck] = useState(cardDetails.primaryStatus);
  return (
    <CardContainer>
      <TickBox onClick={() => setPrimaryCheck(!primaryCheck)}>
        <TickImage
          src={primaryCheck === true ? Checked : Unchecked}
          className="checked"
        />
        <PrimaryLabel
          content={data.primary}
          className={`${primaryCheck?.toString()}`}
        />
      </TickBox>
      <CardDetails>
        <VisaLogo>
          <LogoImage src={visa} />
        </VisaLogo>
        <CardInfo>
          <CardNumberLabel content={cardDetails.cardNumber} />
          <CardTypeLabel content={cardDetails.cardType} />
        </CardInfo>
      </CardDetails>
      <EditDeleteButton>
        <EditLabel content={data.edit} />
        <DeleteLabel content={data.delete} />
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
const TickImage = styled(Image)``;
const LogoImage = styled(Image)`
  height: 24.65px;
  width: 76.64px;
`;
const VisaLogo = styled.div`
  height: 24.65px;
  width: 76.64px;
  margin-top: 8px;
`;
const CardInfo = styled.div`
  margin-left: 30.36px;
  display: flex;
  flex-direction: column;
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
const PrimaryLabel = styled(Label)`
  height: 19px;
  width: 52px;
  color: ${(props) =>
    props.className === "true"
      ? `${colors.grey_6a6a6a}`
      : `${colors.grey_8b8b8b}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.spaceNeg0_27};
  line-height: ${sizes.size19};
  margin-left: 11px;
`;
const CardNumberLabel = styled(Label)`
  height: 28px;
  color: ${colors.black_2D2D2D};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.spaceNeg0_3};
  line-height: ${sizes.size28};
`;
const CardTypeLabel = styled(Label)`
  height: 19px;
  color: ${colors.grey_6a6a6a};
  font-size: ${sizes.size14};
  letter-spacing: ${letterSpacing.spaceNeg0_27};
  line-height: ${sizes.size19};
  margintop: 4px;
`;
const EditLabel = styled(Label)`
  width: 30px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
`;
const DeleteLabel = styled(Label)`
  width: 30px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
`;
