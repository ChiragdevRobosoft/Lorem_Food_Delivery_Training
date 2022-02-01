import React, { useState } from "react";
import styled from "styled-components";
import data from "../../common/constants.json";
import { fontFamilies, colors, sizes, opacity } from "../../../variables";
import { PaymentCardDetailsProps } from "../../common/interfaces";
import PaymentCard from "../../common/paymentCard";
import Label from "../../common/label";
import { queries } from "../../common/breakpoints";

const Payment = () => {
  return (
    <Wrapper>
      <AddPaymentBar>
        <PaymentLabel content={data.myAddress} />
        <AddPaymentLabel content={data.AddNew} />
      </AddPaymentBar>
      <PaymentCardContainer>
        {data.PaymentCardDetails.map(
          (item: PaymentCardDetailsProps, index: number) => {
            return <PaymentCard cardDetails={item} key={index} />;
          }
        )}
      </PaymentCardContainer>
    </Wrapper>
  );
};
export default Payment;

const Wrapper = styled.div`
  width: 958px;
  position: relative;
  padding-bottom: 76px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 84px;
  min-height: 516px;
  ${queries.tabletLandscape} {
    width: 569px;
  }
  ${queries.mobile} {
    width: 450px;
  }
`;
const AddPaymentBar = styled.div`
  display: flex;
  flew-direction: row;
  gap: 752px;
  ${queries.tabletLandscape} {
    gap: 240px;
  }
  ${queries.mobile} {
    gap: 190px;
  }
  ${queries.smallMobile} {
    gap: 180px;
  }
`;
const AddPaymentLabel = styled(Label)`
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  ${queries.tabletLandscape} {
    font-size: ${sizes.size20};
  }
  ${queries.mobile} {
    font-size: ${sizes.size15};
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size12};
  }
`;
const PaymentLabel = styled(Label)`
  height: 22px;
  color: ${colors.grey_6f6f6f};
  letter-spacing: -0.27px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size20};
  }
  ${queries.mobile} {
    font-size: ${sizes.size15};
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size12};
  }
`;
const PaymentCardContainer = styled.div`
  width: 958px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 14px;
  ${queries.tabletLandscape} {
    flex-flow: column wrap;
  }
  ${queries.mobile} {
    flex-flow: column wrap;
  }
`;
