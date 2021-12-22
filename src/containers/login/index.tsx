import React, { useState } from "react";
import styled from "styled-components";
import closeButton from "../../assets/close_button.png";
import Buttons from "../../components/button/index";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import TextBox from "../../components/textbox";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <Modal open={open} onClose={onCloseModal}>
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
            onClick={onCloseModal}
          ></CloseImage>
          <Title>Let's get started!</Title>
          <TextBox name="Email" isPassword={false}></TextBox>
          <TextBox name="Password" isPassword={true}></TextBox>
          <RedirectLink to={links.forgotPassword}>
            Forgot Password?
          </RedirectLink>
          <Buttons className="colouredBgButton" name="LOGIN"></Buttons>
          <SocialMedia>
            <Buttons className="facebook" name="Facebook" />
            <Buttons className="google" name="Google+" />
          </SocialMedia>
          <Footer>
            <ForgotPasswordLink>Don't have an account?</ForgotPasswordLink>
            <RedirectLink className="getNewLink" to={links.createAccount}>
              Get new one!
            </RedirectLink>
          </Footer>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default Login;
const TagLine = styled.div`
  height: 132px;
  width: 330px;
  color: #ffffff;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 34px;
  letter-spacing: -0.57px;
  line-height: 44px;
  text-shadow: 0 0 9px 0 #ffffff;
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
  height: ${sizes.size19};
  color: rgba(74, 74, 74, 1);
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
const RedirectLink = styled(Link)`
  color: ${(props) =>
    props.className === "getNewLink" ? "#F67E03" : "#4a4a4a"};
  text-decoration: none;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-left: ${(props) =>
    props.className === "getNewLink" ? "10px" : "300px"};
  float: right;
  margin-right: 50px;
  margin-top: ${(props) =>
    props.className === "getNewLink" ? "40px" : "none"};
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
  background-color: #ffffff;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
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
  background-color: white;
  height: ${sizes.size588};
  width: ${sizes.size480};
`;
const Title = styled.p`
  height: ${sizes.size38};
  width: ${sizes.size220};
  color: #2a2c30;
  font-family: "Open Sans", sans-serif;
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: ${sizes.size50};
  margin-bottom: ${sizes.size60};
  margin-top: ${sizes.size50};
  letter-spacing: ${sizes.sizenp47};
  line-height: ${sizes.size38};
  text-shadow: 0 0 9px 0 #ffffff;
`;
const Lorem = styled.p`
  height: ${sizes.size60};
  width: ${sizes.size103};
  color: #ffffff;
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
