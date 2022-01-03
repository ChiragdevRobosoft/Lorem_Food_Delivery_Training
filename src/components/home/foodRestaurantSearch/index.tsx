import Foodsearch from "./foodSearchBox";
import Header from "../../common/header/index";
import mouseScroll from "./../../../assets/home/foodRestaurantSearch/mouse-scroll.png";
import styled from "styled-components";
import { useState } from "react";
import Login from "../../../containers/login";
import { backdropClasses } from "@mui/material";
import ForgotPassword from "../../../containers/forgot-password";
import CreateAccount from "../../../containers/create-account";
import AccountDetails from "../../../containers/account-details";
import Verification from "../../../containers/verification";
import RegisterSuccess from "../../../containers/welcome";
const LandingPage = () => {
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
  console.log(redirectFromLogin, redirectFromRegister);
  return (
    <Wrapper className={"backDrop"}>
      <Header
        setShowLogin={setOpen}
        setShowCreateAccount={setShowCreateAccount}
      />
      <p>
        <span>Order your food</span>
        <span>from the best restaurants</span>
      </p>
      <Foodsearch />
      <div className="scroll-holder">
        <img src={mouseScroll} alt="mouse-scroll" />
        <p>Scroll</p>
      </div>
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
      {/* {showVerification && (
        <Verification
          onCloseModal={() => setShowVerification(false)}
          onOpenModal={() => setShowVerification(false)}
          open={showVerification}
        />
      )}
      {showRegisterSuccess && (
        <RegisterSuccess
          onCloseModal={() => setShowRegisterSuccess(false)}
          onOpenModal={() => setShowRegisterSuccess(false)}
          open={showRegisterSuccess}
        />
      )} */}
    </Wrapper>
  );
};
export default LandingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0px 788px 63px 413px;
    height: 166px;
    width: 719px;
    color: #4c4c4c;
    font-family: "Open Sans", sans-serif;
    font-size: 60px;
    letter-spacing: 0;
    line-height: 83px;
    text-shadow: 0 0 9px 0 #fff;
    align-items: left;

    span {
      display: block;
    }
  }
  .backDrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .scroll-holder {
    margin: 0px 900px 38px 901px;
    height: 77px;
    width: 119px;
    display: block;
    img {
      margin: 0px 43.82px 10px 43.18px;
      height: 49px;
      width: 32px;
    }
    p {
      margin: 0px 0.45px 0px 0px;
      height: 18px;
      width: 118.55px;
      font-size: 13px;
      opacity: 0.66;
      font-family: "Open Sans", sans-serif;
      letter-spacing: 3.66px;
      line-height: 18px;
      text-align: center;
    }
  }
`;
