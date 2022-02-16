import styled from "styled-components";
import data from "./../../common/constants.json";
import {
  colors,
  fontFamilies,
  letterSpacing,
  opacity,
  sizes,
} from "../../../variables";
import Foodsearch from "../../common/SearchComponent/index";
import Header from "../../common/header/index";
import mouseScroll from "./../../../assets/home/foodRestaurantSearch/mouse-scroll.png";
import { useState } from "react";
import Login from "../../../containers/login";
import ForgotPassword from "../../../containers/forgot-password";
import CreateAccount from "../../../containers/create-account";
import AccountDetails from "../../../containers/account-details";
import Verification from "../../../containers/verification";
import RegisterSuccess from "../../../containers/welcome";
import Verified from "../../../containers/verified";
import PasswordSuccess from "../../../containers/password-success";
import { queries } from "../../common/breakpoints";
import Label from "../../common/label";

const FoodRestaurantSearch = () => {
  const [open, setOpen] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [redirectFromLogin, setRedirectFromLogin] = useState(false);
  const [redirectFromRegister, setRedirectFromRegister] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
  const [redirectFromForgotPassword, setRedirectFromForgotPassword] =
    useState(false);
  const [showVerified, setShowVerified] = useState(false);
  const [showPasswordSuccess, setShowPasswordSuccess] = useState(false);
  console.log(redirectFromLogin, redirectFromRegister);

  return (
    <Wrapper className={"backDrop"}>
      <Header
        className="home"
        setShowLogin={setOpen}
        setShowCreateAccount={setShowCreateAccount}
      />
      <Content>
        <Heading>
          <Headingspan>
            {data.homeTexts.foodRestaurantSearch.heading}
          </Headingspan>
          <Headingspan>
            {data.homeTexts.foodRestaurantSearch.description}
          </Headingspan>
        </Heading>
        <Foodsearch pageType="home" />
      </Content>
      <ScrollComp>
        <Scroll src={mouseScroll} alt="mouse-scroll" />
        <ScrollNameLabel
          content={data.homeTexts.foodRestaurantSearch.scrollText}
        />
      </ScrollComp>
      {open && (
        <Login
          onCloseModal={onCloseModal}
          onOpenModal={onOpenModal}
          open={open}
          setShowForgotPassword={setShowForgotPassword}
          setShowCreateAccount={setShowCreateAccount}
          setRedirectFromLogin={setRedirectFromLogin}
          setRedirectFromRegister={setRedirectFromRegister}
          redirectFromRegister={redirectFromRegister}
        />
      )}
      {showForgotPassword && (
        <ForgotPassword
          onCloseModal={onCloseModal}
          onOpenModal={onOpenModal}
          open={open}
          setShowForgotPassword={setShowForgotPassword}
          setShowVerification={setShowVerification}
          redirectFromForgotPassword={redirectFromForgotPassword}
          setRedirectFromForgotPassword={setRedirectFromForgotPassword}
        />
      )}
      {showCreateAccount && (
        <CreateAccount
          onCloseModal={() => setShowCreateAccount(false)}
          onOpenModal={() => setShowCreateAccount(false)}
          open={showCreateAccount}
          setShowCreateAccount={setShowCreateAccount}
          redirectFromLogin={redirectFromLogin}
          setRedirectFromLogin={setRedirectFromLogin}
          setShowLogin={setOpen}
          setRedirectFromRegister={setRedirectFromRegister}
          setShowVerification={setShowVerification}
          setShowAccountDetails={setShowAccountDetails}
        />
      )}
      {showAccountDetails && (
        <AccountDetails
          onCloseModal={() => setShowAccountDetails(false)}
          onOpenModal={() => setShowAccountDetails(false)}
          open={showAccountDetails}
          setShowRegisterSuccess={setShowRegisterSuccess}
        />
      )}
      {showVerification && (
        <Verification
          onCloseModal={() => setShowVerification(false)}
          onOpenModal={() => setShowVerification(false)}
          open={showVerification}
          setShowAccountDetails={setShowAccountDetails}
          setShowVerification={setShowVerification}
          setShowCreateAccount={setShowCreateAccount}
          redirectFromForgotPassword={redirectFromForgotPassword}
          setShowVerified={setShowVerified}
        />
      )}
      {showRegisterSuccess && (
        <RegisterSuccess
          onCloseModal={() => setShowRegisterSuccess(false)}
          onOpenModal={() => setShowRegisterSuccess(false)}
          open={showRegisterSuccess}
          setShowRegisterSuccess={setShowRegisterSuccess}
        />
      )}
      {showVerified && (
        <Verified
          onCloseModal={() => setShowVerified(false)}
          onOpenModal={() => setShowVerified(false)}
          open={showVerified}
          setShowPasswordSuccess={setShowPasswordSuccess}
          setShowVerified={setShowVerified}
        />
      )}
      {showPasswordSuccess && (
        <PasswordSuccess
          onCloseModal={() => setShowPasswordSuccess(false)}
          onOpenModal={() => setShowPasswordSuccess(false)}
          open={showPasswordSuccess}
          setShowPasswordSuccess={setShowPasswordSuccess}
        />
      )}
    </Wrapper>
  );
};
export default FoodRestaurantSearch;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  .backDrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Content = styled.div`
  width: 50%;
  margin: auto 32.5% 176px 17.5%;
  ${queries.tablet} {
    width: 98%;
    margin: auto auto 105px auto;
  }
  ${queries.smallMobile} {
    width: 98%;
    margin: auto auto 50px auto;
  }
`;

const Heading = styled.p`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  margin-bottom: 63px;
  flex-wrap: wrap;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size60};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size83};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  align-items: left;
  ${queries.desktopWide} {
    font-size: 50px;
    line-height: 73px;
    margin-bottom: 53px;
  }
  ${queries.desktopMd} {
    font-size: 40px;
    line-height: 63px;
    margin-bottom: 43px;
  }
  ${queries.tabletLandscape} {
    font-size: 30px;
    line-height: 53px;
    margin-bottom: 33px;
  }
  ${queries.tablet} {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 20px;
  }
`;
const Headingspan = styled.span`
  display: block;
`;

const ScrollComp = styled.div`
  margin: 0 auto 38px auto;
  height: 77px;
  width: 119px;
  display: flex;
  flex-direction: column;
  ${queries.tablet} {
    height: 62px;
    width: 95px;
  }
  ${queries.smallMobile} {
    height: 23px;
    width: 36px;
  }
`;

const Scroll = styled.img`
  margin: 0 auto 10px auto;
  height: 49px;
  width: 32px;
  ${queries.tablet} {
    height: 39px;
    width: 26px;
    margin: 0 auto 8px auto;
  }
  ${queries.smallMobile} {
    height: 15px;
    width: 10px;
    margin: 0 auto 3px auto;
  }
`;

const ScrollNameLabel = styled(Label)`
  margin: 0 0.45px 0 0;
  height: 18px;
  //width: 118;
  font-size: ${sizes.size13};
  opacity: ${opacity.opacity0_66};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  letter-spacing: ${letterSpacing.space3_66};
  line-height: ${sizes.size18};
  color: ${colors.grey_848484};
  text-align: center;
`;
