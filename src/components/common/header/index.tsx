import styled from "styled-components";
import cartIcon from "./../../../assets/common/header/cart-icon.png";
import {
  sizes,
  colors,
  angles,
  fontFamilies,
  fontWeight,
  opacity,
} from "../../../variables";

const Header = () => {
  return (
    <WrapperHeader>
      <p className="header-title">LOREM</p>
      <select name="languages" id="pageLang">
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
      </select>
      <p className="login">LOGIN</p>
      <p className="create-account">CREATE AN ACCOUNT</p>
      <div className="cart-holder">
        <img src={cartIcon} alt="cart-icon" />
        <p className="cart">CART</p>
      </div>
    </WrapperHeader>
  );
};
export default Header;

const WrapperHeader = styled.header`
  height: 89px;
  width: 1825px;
  display: flex;
  flex-direction: row;
  margin: 19px 62px 119px 33px;

  .header-title {
    // font-family: "Bebas Neue", cursive;
    // background-image: linear-gradient(60deg, #af4261, #e9a459);
    // background-clip: text;
    // color: transparent;
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
    margin: 15px 1195px 14px 7px;
  }

  select {
    margin: 36px 35px 36px 0px;
    height: 17px;
    width: 75px;
    color: #3e3e3e;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 17px;
    text-align: left;
    background-color: inherit;
    border: none;
    outline: none;
  }

  .login {
    margin: 30px 51px 40px 0px;
    height: 19px;
    width: 47px;
    color: #303134;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 19px;
    text-align: right;
  }

  /* dobut in create account width  adustments in margins made from here*/
  .create-account {
    margin: 30px 41px 40px 0px;
    height: 19px;
    width: 153px;
    color: #303134;
    font-family: "Open Sans", sans-serif;
    font-size: 13px; /* font size given 14 adjusted to fit-in */
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 19px;
    text-align: left;
  }

  .cart-holder {
    display: flex;
    margin: 12px 0px 23px 0px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    height: 54px;
    width: 108px;

    img {
      margin: 13px 20px 14px 30px;
      height: 27px;
      width: 20px;
    }

    .cart {
      margin: 17px 0px 18px -5px;
      height: 19px;
      width: 37px;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      font-size: 14px; /* font size given 14 adjusted to fit-in */
      font-weight: 600;
      letter-spacing: 0.5px;
      line-height: 19px;
      text-align: right;
    }
  }
`;
