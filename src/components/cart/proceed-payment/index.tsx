import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, sizes, fontFamilies, angles } from "../../../variables";
import Searchpath from "../../common/Searchpath";
import data from "../../common/constants.json";
import { NavLink, Outlet } from "react-router-dom";
import Label from "../../common/label";
import Buttons from "../../common/button";

const ProceedPayment = () => {
  const [cartItems, setCartItems] = useState(data.cartContents.myCart);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setCartItems([]);
  };
  return (
    <PageSection>
      <Searchpath path={data.searchPath.menu1} className="grey-dark" />
      <ContentContainer>
        <ProgressSection />
        <CartSection>
          <StepsSection>
            <Label
              content="The Boutique Kitchen"
              height="30px"
              color="#000000"
              fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
              fontSize="22px"
              letterSpacing="0"
              lineHeight="30px"
            />
          </StepsSection>
          <PaymentContainer />
        </CartSection>
      </ContentContainer>
    </PageSection>
  );
};
export default ProceedPayment;

const PageSection = styled.div`
  width: 100wh;
  height: 842px;
  margin: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 72px;
  border: 1px solid black;
`;

const ContentContainer = styled.div`
  width: 50%;
  //position: relative;
  //margin-top: 40px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 39px;
  margin-left: auto;
  margin-right: auto;
  //border: 1px solid black;
`;

const ProgressSection = styled.div`
  height: 55px;
  width: 66%;
  //border: 1px solid black;
`;

const CartSection = styled.div`
  width: 100%;
  //height: 593px;
  //margin-top: 39px;
  //margin-left: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 23px;
  //border: 1px solid black;
  box-sizing: border-box;
`;

const StepsSection = styled.div`
  width: 634px; //66%
  //border: 1px solid black;
`;

const PaymentContainer = styled.div`
  width: 305px; //32%
  height: 480px;
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px 17px 12px 18px;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid red;
`;
