import React, { useState } from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import icon_forgot from "../../assets/icn_forgot.png";
import Buttons from "../../components/button/index";
import { useNavigate, Link } from "react-router-dom";
import TextBox from "../../components/textbox";
import Underline from "../../assets/underline.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CountryCode from "../../components/country-code";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [InputType, setInputType] = useState("email");
  return (
    <Modal
      open={open}
      classNames={{ modal: "modalStyle" }}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      styles={{
        overlay: {
          background: "transparent",
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
          <RedirectLink to={links.login}>
            <BackImage src={backButton} alt="cut"></BackImage>
          </RedirectLink>
          <ForgotImage>
            <img src={icon_forgot} className="icon_forgot"></img>
          </ForgotImage>
          <Title>Forgot Password!</Title>
          <Discription>
            Share your registered either email address or mobile number to send
            you the OTP to reset your password
          </Discription>
          <Navbar>
            <TypeContainer>
              <InputTypeButton
                type="button"
                onClick={() => setInputType("email")}
                className={InputType === "email" ? "boldButton" : "null"}
              >
                Email
              </InputTypeButton>
              {InputType === "email" ? (
                <Border src={Underline} alt="border" />
              ) : null}
            </TypeContainer>
            <TypeContainer>
              <InputTypeButton
                type="button"
                onClick={() => setInputType("mobile")}
                className={InputType === "mobile" ? "boldButton" : "null"}
              >
                Mobile No.
              </InputTypeButton>
              {InputType === "mobile" ? (
                <Border src={Underline} alt="border" />
              ) : null}
            </TypeContainer>
          </Navbar>
          {InputType === "email" ? (
            <TextBox name="Email" isPassword={false} />
          ) : (
            <CountryCode isOptional={true} />
          )}
          <Buttons className="colouredBgButton" name="SEND OTP"></Buttons>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default ForgotPassword;
const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Border = styled.img`
  height: ${sizes.size4};
  width: ${sizes.size38};
  margin-top: ${sizes.size5};
  padding-left: ${sizes.size1};
`;
const RedirectLink = styled(Link)`
  text-decoration: none;
  border: none;
`;
const BackImage = styled.img`
  float: left;
  margin: ${sizes.size20};
  border: 0;
  height: ${sizes.size17};
  width: ${sizes.size17};
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
  .boldButton {
    color: black;
    font-weight: ${fontWeight.weight600};
  }
`;
const ForgotImage = styled.div`
  height: ${sizes.size5};
  width: ${sizes.size25};
  margin-left: ${sizes.size200};
  margin-top: ${sizes.size60};
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: ${sizes.size50};
  width: ${sizes.sizep40};
  margin-bottom: ${sizes.size65};
  margin-top: ${sizes.size30};
  justify-content: space-between;
`;
const InputTypeButton = styled.button`
  height: ${sizes.size24};
  opacity: 0.66;
  color: #4a4a4a;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: -0.43px;
  line-height: ${sizes.size24};
  background-color: transparent;
  border: none;
  padding: 0;
`;
const WrapperRight = styled.div`
  background-color: white;
  height: ${sizes.size588};
  width: ${sizes.size480};
`;
const Title = styled.p`
  font-family: ${fontFamilies.fontFamilyOsRegular};
  height: ${sizes.size30};
  width: ${sizes.size183};
  color: #2a2c30;
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin-top: ${sizes.size116};
  margin-left: ${sizes.size150};
`;
const Discription = styled.p`
  margin-left: ${sizes.size90};
  word-wrap: break-word;
  height: ${sizes.size60};
  width: ${sizes.size296};
  color: #4a4a4a;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
`;
const WrapperLeft = styled.div`
  background-image: url("../assets/image.png");
  height: ${sizes.size588};
  width: ${sizes.size480};
  text-align: left;
  padding-left: ${sizes.sizep4};
  margin-right: ${sizes.sizen40};
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
  line-height: ${sizes.size60};
  text-align: center;
`;
const BoldText = styled.span`
  font-weight: ${fontWeight.weight800};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
const TagLine = styled.div`
  height: ${sizes.size132};
  width: ${sizes.size330};
  color: #ffffff;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size34};
  letter-spacing: -0.57px;
  line-height: ${sizes.size44};
  text-shadow: 0 0 9px 0 #ffffff;
  word-wrap: break-word;
`;
