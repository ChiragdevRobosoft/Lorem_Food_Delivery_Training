import styled from "styled-components";
import React, { FC } from "react";
import cartIcon from "./../../../assets/common/header/cart-icon.png";
import {
  sizes,
  colors,
  angles,
  fontFamilies,
  fontWeight,
} from "../../../variables";
import data from "./../constants.json";
import cartSvg from "./../../../assets/common/header/icn_cart.svg";

const languages = ["English", "Arabic", "Spanish"];

interface headerProps {
  className: string;
}
const Header: FC<headerProps> = ({ className }) => {
  return (
    <HeaderWrapper className={className}>
      <HeaderTitle className={className}>{data.header.title}</HeaderTitle>
      <LanguageSelector className={className} name="languages" id="pageLang">
        {languages.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          );
        })}
      </LanguageSelector>
      <LoginText className={className}>{data.header.login}</LoginText>
      <CreateAccount className={className}>
        {data.header.createAnAccount}
      </CreateAccount>
      <LineDiv className={className} />
      <CartImage className={className} src={cartIcon} alt="cart-icon" />
      <CartText className={className}>{data.header.cart}</CartText>
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
  background-color: ${(props) =>
    props.className === "home" ? `` : `${colors.white}`};
  box-shadow: ${(props) =>
    props.className === "home"
      ? ``
      : `${sizes.size0} ${sizes.size2} ${sizes.size4} ${sizes.size0} rgba(0,0,0,0.08)`};
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
  height: ${(props) =>
    props.className === "home" ? `${sizes.size60}` : `${sizes.size43}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size103}` : `${sizes.size72}`};
  text-align: center;
  line-height: ${(props) =>
    props.className === "home" ? `${sizes.size60}` : `${sizes.size43}`};
  font-size: ${(props) =>
    props.className === "home" ? `${sizes.size50}` : `${sizes.size35}`};
  letter-spacing: 0;
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size15} ${sizes.size1226} ${sizes.size14} ${sizes.size7}`
      : `${sizes.size14} ${sizes.size1234} ${sizes.size13} ${sizes.size45}`};
`;

const LanguageSelector = styled.select`
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size36} ${sizes.size15} ${sizes.size36} ${sizes.size0}`
      : `${sizes.size29} ${sizes.size33} ${sizes.size24} ${sizes.size0}`};
  height: ${sizes.size17};
  width: ${sizes.size68};
  color: ${colors.grey11};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: 0.5;
  line-height: ${sizes.size17};
  text-align: right;
  background-color: inherit;
  border: none;
  outline: none;
`;

const LoginText = styled.p`
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size30} ${sizes.size51} ${sizes.size40} ${sizes.size0}`
      : `${sizes.size28} ${sizes.size51} ${sizes.size23} ${sizes.size0}`};
  height: ${sizes.size19};
  width: ${sizes.size47};
  color: ${colors.grey10};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: 0.5;
  line-height: ${sizes.size19};
  text-align: right;
`;

const CreateAccount = styled.p`
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size30} ${sizes.size41} ${sizes.size40} ${sizes.size0}`
      : `${sizes.size28} ${sizes.size43} ${sizes.size23} ${sizes.size0}`};
  height: ${sizes.size19};
  width: ${sizes.size153};
  color: ${colors.grey10};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: 0.5;
  line-height: ${sizes.size19};
  text-align: right;
`;

const LineDiv = styled.div`
  box-sizing: border-box;
  height: ${(props) =>
    props.className === "home" ? `${sizes.size54}` : `${sizes.size33_77}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size1}` : `${sizes.size2}`};
  border: ${sizes.size1} solid #000000;
  opacity: 0.1;
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size12} ${sizes.size34} ${sizes.size33} ${sizes.size0}`
      : `${sizes.size18} ${sizes.size39_5} ${sizes.size18_23} ${sizes.size0}`};
`;

const CartImage = styled.img`
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size25} ${sizes.size24} ${sizes.size37} ${sizes.size0}`
      : `${sizes.size23} ${sizes.size24} ${sizes.size20} ${sizes.size0}`};
  height: ${(props) =>
    props.className === "home" ? `${sizes.size27}` : `${sizes.size28}`};
  width: ${sizes.size20};
  background-image: ${(props) =>
    props.className === "home"
      ? ``
      : `linear-gradient(138.33deg, #F3698E 0%, #FEB456 100%)`};
`;
const CartText = styled.p`
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size29} ${sizes.size0} ${sizes.size41} ${sizes.size0}`
      : `${sizes.size27} ${sizes.size67} ${sizes.size26} ${sizes.size0}`};
  height: ${(props) =>
    props.className === "home" ? `${sizes.size19}` : `${sizes.size17}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size37}` : `${sizes.size32}`};
  color: ${(props) =>
    props.className === "home" ? `${colors.white}` : `${colors.pink3}`};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${(props) =>
    props.className === "home" ? `${sizes.size14}` : `${sizes.size12}`};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${(props) => (props.className === "home" ? `0.5` : `0.43`)};
  line-height: ${(props) =>
    props.className === "home" ? `${sizes.size19}` : `${sizes.size17}`};
  text-align: right;
`;

/*
color: ${(props) =>
    props.className === "home" ? `` : `${colors.transparentColor}`};
clip-path: url(${cartSvg});
// background-clip: ${(props) => (props.className === "home" ? `` : "inherit")};
  // -webkit-background-clip: ${(props) =>
  //   props.className === "home" ? `` : "inherit"};
*/
