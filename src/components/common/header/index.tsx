import styled from "styled-components";
import React, { FC } from "react";
import cartIcon from "./../../../assets/common/header/cart-icon.png";
import {
  sizes,
  colors,
  angles,
  fontFamilies,
  fontWeight,
  letterSpacing,
} from "../../../variables";
import data from "./../constants.json";
import User from "./userInfo";

const languages = ["English", "Arabic", "Spanish"];
interface headerProps {
  setShowLogin?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateAccount?: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
}

const Header: FC<headerProps> = (props) => {
  return (
    <HeaderWrapper className={props.className}>
      <HeaderTitle className={props.className}>{data.header.title}</HeaderTitle>
      <LanguageSelector
        className={props.className}
        name="languages"
        id="pageLang"
      >
        {languages.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          );
        })}
      </LanguageSelector>
      {props.className === "home" || props.className === "newSec" ? (
        <Login
          className={props.className}
          onClick={() => {
            return props.setShowLogin !== undefined
              ? props.setShowLogin(true)
              : null;
          }}
        >
          {data.header.login}
        </Login>
      ) : null}
      {props.className === "loggedin" ? <User /> : null}
      {props.className === "loggedin" ? (
        <VertLine className={props.className} />
      ) : null}
      {props.className === "home" || props.className === "newSec" ? (
        <CreateAccount
          className={props.className}
          onClick={() => {
            return props.setShowCreateAccount !== undefined
              ? props.setShowCreateAccount(true)
              : null;
          }}
        >
          {data.header.createAnAccount}
        </CreateAccount>
      ) : null}
      {props.className === "loggedin" ? (
        <Logout className={props.className}>{data.header.logout}</Logout>
      ) : null}
      {props.className === "home" || props.className === "newSec" ? (
        <VertLine className={props.className} />
      ) : null}
      <CartLogo className={props.className} src={cartIcon} alt="cart-icon" />
      <Cart className={props.className}>{data.header.cart}</Cart>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.header`
  height: ${(props) => (props.className === "home" ? `89px` : `70px`)};
  width: ${(props) => (props.className === "home" ? `1825px` : `100%`)};
  display: flex;
  flex-direction: row;
  margin: ${(props) =>
    props.className === "home" ? `19px 62px 119px 33px` : `0px 0px 0px 0px`};
  background-color: ${(props) =>
    props.className === "home" ? `` : `${colors.white_ffffff}`};
  box-shadow: ${(props) =>
    props.className === "home"
      ? ``
      : `${sizes.size0} ${sizes.size2} ${sizes.size4} ${sizes.size0} rgba(0,0,0,0.08)`};
`;

const HeaderTitle = styled.p`
  background-image: linear-gradient(
    ${angles.angle60},
    ${colors.pink_e21143_09},
    ${colors.yellow_ffb03a_09}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  font-family: ${fontFamilies.fontFamilyBn};
  height: ${(props) => (props.className === "home" ? `60px` : `43px`)};
  width: ${(props) => (props.className === "home" ? `103px` : `72px`)};
  text-align: center;
  line-height: ${(props) =>
    props.className === "home" ? `${sizes.size60}` : `${sizes.size43}`};
  font-size: ${(props) =>
    props.className === "home" ? `${sizes.size50}` : `${sizes.size35}`};
  letter-spacing: ${letterSpacing.space0};
  margin: ${(props) =>
    props.className === "home"
      ? `15px 1226px 14px 7px`
      : `14px 1234px 13px 45px`};
`;

const LanguageSelector = styled.select`
  margin: ${(props) =>
    props.className === "home" ? `36px 0 36px 0` : `29px 0 24px 0`};
  height: ${sizes.size17};
  width: 68px;
  color: ${colors.grey_3e3e3e};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${letterSpacing.space0_5};
  line-height: ${sizes.size17};
  text-align: right;
  background-color: inherit;
  border: none;
  outline: none;
`;

const Login = styled.p`
  margin: ${(props) =>
    props.className === "home" ? `30px 51px 40px 15px` : `28px 51px 23px 33px`};
  height: ${sizes.size19};
  width: 47px;
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${letterSpacing.space0_5};
  line-height: ${sizes.size19};
  text-align: right;
`;

const CreateAccount = styled.p`
  margin: ${(props) =>
    props.className === "home" ? `30px 41px 40px 0` : `28px 43px 23px 0`};
  height: ${sizes.size19};
  width: 153px;
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${letterSpacing.space0_5};
  line-height: ${sizes.size19};
  text-align: right;
`;

const Logout = styled.p`
  margin: ${(props) =>
    props.className === "loggedin"
      ? `28px 36.51px 23px 39.53px`
      : `28px 43px 23px 0`};
  height: ${sizes.size19};
  width: 61.83px;
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${letterSpacing.space0_5};
  line-height: ${sizes.size19};
  text-align: right;
`;

const VertLine = styled.div`
  box-sizing: border-box;
  height: ${(props) => (props.className === "home" ? `54px` : `33.77px`)};
  width: ${(props) => (props.className === "home" ? `1px` : `2px`)};
  border: ${sizes.size1} solid ${colors.black_000000};
  opacity: 0.1;
  margin: ${(props) =>
    props.className === "home" ? `12px 0px 33px 0` : `18px 0 18.23px 0`};
`;

const CartLogo = styled.img`
  margin: ${(props) =>
    props.className === "home"
      ? `25px 24px 37px 34px`
      : `23px 24px 20px 39.5px`};
  height: ${(props) => (props.className === "home" ? `27px` : `28px`)};
  width: 20px;
  background-image: ${(props) =>
    props.className === "home"
      ? ``
      : `linear-gradient(138.33deg, #F3698E 0%, #FEB456 100%)`};
`;

const Cart = styled.p`
  margin: ${(props) =>
    props.className === "home" ? `29px 0 41px 0` : `27px 67px 26px 0`};
  height: ${(props) => (props.className === "home" ? `19px` : `17px`)};
  width: ${(props) => (props.className === "home" ? `37px` : `32px`)};
  color: ${(props) =>
    props.className === "home"
      ? `${colors.white_ffffff}`
      : `${colors.pink_fda5a3}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${(props) =>
    props.className === "home" ? `${sizes.size14}` : `${sizes.size12}`};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${(props) =>
    props.className === "home"
      ? `${letterSpacing.space0_5}`
      : `${letterSpacing.space0_43}`};
  line-height: ${(props) =>
    props.className === "home" ? `${sizes.size19}` : `${sizes.size17}`};
  text-align: right;
`;
