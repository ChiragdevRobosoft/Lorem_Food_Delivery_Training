import React, { useState } from "react";
import styled from "styled-components";
import closeButton from "../../assets/close_button.png";
import Buttons from "../../components/common/button/index";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import TextBox from "../../components/common/textbox";
import data from "./../../components/common/constants.json";
import { sizes, colors, fontFamilies, fontWeight } from "../../variables";
const Login = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowForgotPassword,
  setShowCreateAccount,
  setRedirectFromLogin,
  setRedirectFromRegister,
  redirectFromRegister,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
  setRedirectFromLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setRedirectFromRegister: React.Dispatch<React.SetStateAction<boolean>>;
  redirectFromRegister: boolean;
}) => {
  return (
    <Modal
      open={open}
      classNames={{ modal: "modalStyle" }}
      onClose={() => {
        setRedirectFromRegister(false);
        onCloseModal();
      }}
      center
      showCloseIcon={false}
      styles={{
        overlay: {
          background: redirectFromRegister
            ? "transparent"
            : "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <Wrapper>
        <WrapperLeft>
          <Lorem>LOREM</Lorem>
          <TagLine>
            Experience the easiest a way to get <BoldText>great food </BoldText>
            Delivered
          </TagLine>
        </WrapperLeft>
        <WrapperRight>
          <CloseImage
            src={closeButton}
            alt="cut"
            onClick={() => {
              setRedirectFromRegister(false);
              onCloseModal();
            }}
          ></CloseImage>
          <Title>{data.loginModal.login.title}</Title>
          <EmailBox>
            <TextBox name="Email" isPassword={false}></TextBox>
          </EmailBox>
          <PasswordBox>
            <TextBox name="Password" isPassword={true}></TextBox>
          </PasswordBox>
          <ForgetButton onClick={() => setShowForgotPassword(true)}>
            {data.loginModal.login.forgot}
          </ForgetButton>
          <Buttons className="colouredBgButton" name="LOGIN"></Buttons>
          <SocialMedia>
            <Buttons className="facebook" name="Facebook" />
            <Buttons className="google" name="Google+" />
          </SocialMedia>
          <Footer>
            <ForgotPasswordLink>
              {data.loginModal.login.createAccount}
            </ForgotPasswordLink>
            <NewLinkButton
              onClick={() => {
                setRedirectFromLogin(true);
                setShowCreateAccount(true);
              }}
            >
              {data.loginModal.login.getNewOne}
            </NewLinkButton>
          </Footer>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default Login;
const ForgetButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.grey_4a4a4a};
  text-decoration: none;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-left: "300px";
  float: right;
  margin-right: 50px;
  margin-top: "none";
  margin-bottom: ${sizes.size30};
  padding-top: 0;
`;
const EmailBox = styled.div`
  margin-bottom: 60px;
`;
const PasswordBox = styled.div`
  margin-bottom: 60px;
`;
const TagLine = styled.div`
  height: 132px;
  width: 330px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 34px;
  letter-spacing: -0.57px;
  line-height: 44px;
  margin-top: 60px;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  word-wrap: break-word;
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;
const ForgotPasswordLink = styled.p`
  height: 19px;
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  margin-bottom: 20px;
  margin-top: 40px;
`;
const CloseImage = styled.img`
  float: right;
  margin: 20px;
`;
const NewLinkButton = styled.button`
  color: ${colors.orange_f67e03};
  text-decoration: none;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-left: 10px;
  float: right;
  margin-right: 50px;
  margin-top: 40px;
  margin-bottom: 30px;
  padding-top: 0;
`;
const Footer = styled.div`
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  align-self: center;
  margin-left: 125px;
  margin-right: auto;
`;
const Wrapper = styled.div`
  height: 588px;
  width: 960px;
  border-radius: ${sizes.size8};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 24px 0 ${colors.black_000000_05};
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
const WrapperLeft = styled.div`
  background-image: url("../assets/image.png");
  height: 588px;
  width: 480px;
  text-align: left;
  padding-left: 4%;
  margin-right: -40px;
`;
const WrapperRight = styled.div`
  background-color: ${colors.white_ffffff};
  height: 588px;
  width: 470px;
`;
const Title = styled.p`
  height: 38px;
  width: 300px;
  color: ${colors.black_2a2c30};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: 50px;
  margin-bottom: 60px;
  margin-top: 50px;
  letter-spacing: ${sizes.sizen47};
  line-height: ${sizes.size38};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
`;
const Lorem = styled.p`
  height: 60px;
  width: 103px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyBn};
  font-size: ${sizes.size50};
  margin-bottom: 30px;
  margin-top: 150px;
  letter-spacing: 0;
  line-height: 60px;
  text-align: center;
`;
const BoldText = styled.span`
  font-weight: ${fontWeight.weight800};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
