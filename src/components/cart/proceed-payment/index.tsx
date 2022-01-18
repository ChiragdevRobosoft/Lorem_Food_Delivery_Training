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
        <Label
          content={`${data.cartContents.MyCartTitle} (${data.cartContents.myCart.length})`}
          height="30px"
          color="#000000"
          fontFamily={`${fontFamilies.fontFamilyOsSemiBold}`}
          fontSize="22px"
          letterSpacing="0"
          lineHeight="30px"
        />
      </ContentContainer>
    </PageSection>
  );
};
export default ProceedPayment;

const PageSection = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const ContentContainer = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  margin-top: 31px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  padding-bottom: 10px;
  border: 1px solid black;
`;

const CardContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
`;

const Cartcard = styled.div`
  width: 303px;
  height: 172px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 28px 20px 22px 20px;
  border-radius: 6px;
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  box-sizing: border-box;
  .proceed-button {
    background-image: linear-gradient(
      ${angles.angle60},
      ${colors.pink_e21143_09},
      ${colors.yellow_ffb03a_09}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: ${colors.transparentColor};
    position: absolute;
    bottom: 22px;
    right: 21px;
    top: 120px;
  }
`;

const Remove = styled.div`
  height: 15px;
  width: 43px;
  color: ${colors.red_ed1b2e};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
  text-align: right;
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;
