import styled from "styled-components";
import data from "./../../common/constants.json";
import { colors, fontFamilies, opacity, sizes } from "../../../variables";
import Foodsearch from "./../../common/foodSearchBox/index";
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
      <Heading>
        <Headingspan>{data.homeTexts.foodRestaurantSearch.heading}</Headingspan>
        <Headingspan>
          {data.homeTexts.foodRestaurantSearch.description}
        </Headingspan>
      </Heading>
      <Foodsearch pageType="home" />
      <ScrollComp>
        <Scroll src={mouseScroll} alt="mouse-scroll" />
        <ScrollName>
          {data.homeTexts.foodRestaurantSearch.scrollText}
        </ScrollName>
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
  flex-direction: column;
  .backDrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Heading = styled.p`
  margin: ${sizes.size0} ${sizes.size788} ${sizes.size63} ${sizes.size413};
  height: ${sizes.size166};
  width: ${sizes.size719};
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size60};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size83};
  text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
    ${colors.white_ffffff};
  align-items: left;
`;
const Headingspan = styled.span`
  display: block;
`;

const ScrollComp = styled.div`
  margin: ${sizes.size0} ${sizes.size900} ${sizes.size38} ${sizes.size901};
  height: ${sizes.size77};
  width: ${sizes.size119};
  display: block;
`;

const Scroll = styled.img`
  margin: ${sizes.size0} ${sizes.size43_82} ${sizes.size10} ${sizes.size43_18};
  height: ${sizes.size49};
  width: ${sizes.size32};
`;

const ScrollName = styled.p`
  margin: ${sizes.size0} ${sizes.size0_45} ${sizes.size0} ${sizes.size0};
  height: ${sizes.size18};
  width: ${sizes.size118_55};
  font-size: ${sizes.size13};
  opacity: ${opacity.opacity0_66};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  letter-spacing: ${sizes.size3_66};
  line-height: ${sizes.size18};
  color: ${colors.grey_848484};
  text-align: center;
`;
