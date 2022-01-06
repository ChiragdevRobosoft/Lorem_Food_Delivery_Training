import React, { useState } from "react";
import styled from "styled-components";
import closeButton from "../../assets/close_button.png";
import Buttons from "../../components/common/button/index";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import TextBox from "../../components/common/textbox";
import data from "./../../components/common/constants.json";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
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
  const navigate = useNavigate();
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
  height: ${sizes.size132};
  width: ${sizes.size330};
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
  width: ${sizes.size400};
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;
const ForgotPasswordLink = styled.p`
  height: ${sizes.size19};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  margin-bottom: ${sizes.size20};
  margin-top: ${sizes.size40};
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
  margin-bottom: ${sizes.size30};
  padding-top: 0;
`;
const Footer = styled.div`
  flex-direction: row;
  margin-bottom: ${sizes.size20};
  margin-top: ${sizes.sizen10};
  display: flex;
  align-self: center;
  margin-left: ${sizes.size125};
  margin-right: auto;
`;
const Wrapper = styled.div`
  height: ${sizes.size588};
  width: ${sizes.size960};
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
  height: ${sizes.size588};
  width: ${sizes.size480};
  text-align: left;
  padding-left: ${sizes.sizep4};
  margin-right: ${sizes.sizen40};
`;
const WrapperRight = styled.div`
  background-color: ${colors.white_ffffff};
  height: 588px;
  width: 470px;
`;
const Title = styled.p`
  height: ${sizes.size38};
  width: ${sizes.size300};
  color: ${colors.black_2a2c30};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: ${sizes.size50};
  margin-bottom: ${sizes.size60};
  margin-top: ${sizes.size50};
  letter-spacing: ${sizes.sizen47};
  line-height: ${sizes.size38};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
`;
const Lorem = styled.p`
  height: ${sizes.size60};
  width: ${sizes.size103};
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyBn};
  font-size: ${sizes.size50};
  margin-bottom: ${sizes.size30};
  margin-top: ${sizes.size150};
  letter-spacing: 0;
  line-height: 60px;
  text-align: center;
`;
const BoldText = styled.span`
  font-weight: ${fontWeight.weight800};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
