import React, { useState } from "react";
import styled from "styled-components";
import closeButton from "../../assets/close_button.png";
import Buttons from "../../components/button/index";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import TextBox from "../../components/textbox";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";

const CreateAccount = () => {
  const history = useNavigate();
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <Modal open={open} center showCloseIcon={false} onClose={onCloseModal}>
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
          <Title>Create your account</Title>
          <Discription>
            Share your email address to send you the OTP to get yourself
            register!
          </Discription>
          <TextBox name="Email" isPassword={false}></TextBox>
          <Buttons className="colouredBgButton" name="CREATE ACCOUNT"></Buttons>
          <TermsAndCondition>
            <Terms>By registering you agree to the</Terms>
            <RedirectLink className="termsConditions" to={links.login}>
              Terms & Conditions
            </RedirectLink>
          </TermsAndCondition>
          <SocialMedia>
            <Buttons className="facebook" name="Facebook" />
            <Buttons className="google" name="Google+" />
          </SocialMedia>
          <Footer>
            <LoginLink>Already have an account?</LoginLink>
            <RedirectLink className="login" to={links.login}>
              Login
            </RedirectLink>
          </Footer>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default CreateAccount;
const Discription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  height: ${sizes.size50};
  width: ${sizes.size280};
  color: #4a4a4a;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
  margin-top: -20px;
  margin-left: 100px;
`;
const TagLine = styled.div`
  height: ${sizes.size132};
  width: ${sizes.size330};
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
  width: ${sizes.size400};
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;
const LoginLink = styled.p`
  height: ${sizes.size19};
  color: #4a4a4a;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 20px;
  letter-spacing: -0.25px;
`;
const CloseImage = styled.img`
  float: right;
  margin: 20px;
`;
const RedirectLink = styled(Link)`
  color: #f67e03;
  text-decoration: none;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-left: ${(props) =>
    props.className === "termsConditions" ? "-20px" : "10px"};
  float: right;
  margin-right: 70px;
  margin-top: ${(props) =>
    props.className === "termsConditions" ? "-40px" : "15px"};
  margin-bottom: ${sizes.size30};
  padding-top: 0;
`;
const Footer = styled.div`
  flex-direction: row;
  margin-bottom: ${sizes.size20};
  margin-top: 10px;
  display: flex;
  align-self: center;
  margin-left: 130px;
  margin-right: auto;
  width: 500px;
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
  height: ${sizes.size59};
  width: ${sizes.size318};
  color: #2a2c30;
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  letter-spacing: -0.47px;
  line-height: 38px;
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin-top: 70px;
  margin-left: 80px;
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
const Terms = styled.p`
  height: ${sizes.size19};
  width: ${sizes.size450};
  color: #4a4a4a;
  font-family: "Open Sans", sans-serif;
  font-size: ${sizes.size14};
  line-height: 19px;
  margin-bottom: 20px;
  margin-left: 80px;
  margin-top: 40px;
`;
const TermsAndCondition = styled.div`
  height: ${sizes.size19};
  color: rgba(74, 74, 74, 1);
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  margin-bottom: ${sizes.size20};
  margin-top: ${sizes.size40};
`;
