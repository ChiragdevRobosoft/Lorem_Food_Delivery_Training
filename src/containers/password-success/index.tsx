import React, { useState } from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import passwordsuccess from "../../assets/password_success.png";
import { useNavigate } from "react-router-dom";
import TextBox from "../../components/textbox";
import Buttons from "../../components/button/index";
import closeButton from "../../assets/close_button.png";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
const PasswordSuccess = () => {
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
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
        <SuccessImage>
          <img src={passwordsuccess} className="passwordsuccess"></img>
        </SuccessImage>
        <Title>Great!</Title>
        <Discription>Your password has been successfully reset</Discription>
        <LoginButton>
          <Buttons className="colouredBgButton" name="LOGIN NOW"></Buttons>
        </LoginButton>
      </WrapperRight>
    </Wrapper>
  );
};
export default PasswordSuccess;
const Title = styled.p`
  font-family: ${fontFamilies.fontFamilyOsBold};
  height: ${sizes.size30};
  width: ${sizes.size70};
  color: #2a2c30;
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin-top: ${sizes.size230};
  margin-left: ${sizes.size210};
  margin-bottom: -5px;
`;
const Discription = styled.p`
  margin-left: ${sizes.size90};
  word-wrap: break-word;
  width: ${sizes.size330};
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
const CloseImage = styled.img`
  float: right;
  margin: ${sizes.size20};
`;
const LoginButton = styled.div`
  margin-top: ${sizes.size80};
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
const SuccessImage = styled.div`
  height: ${sizes.size5};
  width: ${sizes.size25};
  margin-left: ${sizes.size150};
  margin-top: ${sizes.size120};
`;
const WrapperRight = styled.div`
  background-color: white;
  height: ${sizes.size588};
  width: ${sizes.size480};
`;
