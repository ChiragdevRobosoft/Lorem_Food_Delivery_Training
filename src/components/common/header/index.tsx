import styled from "styled-components";
import React, { FC } from "react";
import cartIcon from "./../../../assets/common/header/cart-icon.png";
import {
  sizes,
  colors,
  angles,
  fontFamilies,
  fontWeight,
  opacity,
} from "../../../variables";
import data from "./../constants.json";

const languages = ["English", "Arabic", "Spanish"];

interface headerProps {
  className: string;
}
const Header: FC<headerProps> = ({ className }) => {
  return (
    <HeaderWrapper className={className}>
      <HeaderTitle className={className}>{data.header.title}</HeaderTitle>
      <LanguageSelector name="languages" id="pageLang">
        {languages.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          );
        })}
      </LanguageSelector>
      <LoginText>{data.header.login}</LoginText>
      <CreateAccount>{data.header.createAnAccount}</CreateAccount>
      <LineDiv />
      <CartImage src={cartIcon} alt="cart-icon" />
      <CartText>{data.header.cart}</CartText>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.header`
  height: ${(props) =>
    props.className === "home" ? `${sizes.size89}` : `${sizes.size70}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size1825}` : `${sizes.size1921}`};
  display: flex;
  flex-direction: row;
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size19} ${sizes.size62} ${sizes.size119} ${sizes.size33}`
      : `${sizes.size0} ${sizes.size0} ${sizes.size0} ${sizes.size0}`};
`;

const HeaderTitle = styled.p`
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink1},
    ${colors.yellow1}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  font-family: ${fontFamilies.fontFamilyBn};
  height: 60px;
  width: 103px;
  text-align: center;
  line-height: 60px;
  font-size: 50px;
  letter-spacing: 0;
  margin: 15px 1226px 14px 7px; //15px 1195px 14px 7px
`;

const LanguageSelector = styled.select`
  margin: 36px 15px 36px 0px; //36px 35px 36px 0px
  height: 17px;
  width: 68px; //75px
  color: ${colors.grey11};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 17px;
  text-align: right;
  background-color: inherit;
  border: none;
  outline: none;
`;

const LoginText = styled.p`
  margin: 30px 51px 40px 0px;
  height: 19px;
  width: 47px;
  color: ${colors.grey10};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: 14px;
  font-weight: ${fontWeight.weight600};
  letter-spacing: 0.5px;
  line-height: 19px;
  text-align: right;
`;

const CreateAccount = styled.p`
  margin: 30px 40px 40px 0px;
  height: 19px;
  width: 154px;
  color: ${colors.grey10};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: 14px;
  font-weight: ${fontWeight.weight600};
  letter-spacing: 0.5px;
  line-height: 19px;
  text-align: right;
`;

const LineDiv = styled.div`
  box-sizing: border-box;
  height: 54px;
  width: 1px;
  border: 1px solid #000000;
  opacity: 0.1;
  margin: 12px 34px 23px 0px;
`;

const CartImage = styled.img`
  margin: 25px 24px 37px 0px;
  height: 27px;
  width: 20px;
`;
const CartText = styled.p`
  margin: 29px 0px 41px 0px;
  height: 19px;
  width: 37px;
  color: #ffffff;
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: 14px;
  font-weight: ${fontWeight.weight600};
  letter-spacing: 0.5px;
  line-height: 19px;
  text-align: right;
`;
