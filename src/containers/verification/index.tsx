import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import icon_verify from "../../assets/icn_verify.png";
import { useNavigate, Link } from "react-router-dom";
import TextBox from "../../components/textbox";
import Buttons from "../../components/button/index";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";

const Verification = () => {
  const navigate = useNavigate();
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
        <RedirectLink to={links.forgotPassword}>
          <BackImage src={backButton} alt="cut"></BackImage>
        </RedirectLink>
        <VerifyImage>
          <img src={icon_verify} className="icon_forgot"></img>
        </VerifyImage>
        <Title>Verification</Title>
        <Discription>
          We just sent you the OTP via SMS to your email address/mobile no. You
          should get it soon!
        </Discription>
        <TextBox name="Enter OTP" isPassword={false}></TextBox>
        <VerifyButton>
          <Buttons className="colouredBgButton" name="VERIFY"></Buttons>
        </VerifyButton>
      </WrapperRight>
    </Wrapper>
  );
};
export default Verification;
const Discription = styled.p`
  margin-left: ${sizes.size130};
  margin-bottom: ${sizes.size80};
  word-wrap: break-word;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
  height: ${sizes.size60};
  width: ${sizes.size220};
  color: #4a4a4a;
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
const VerifyButton = styled.div`
  margin-top: 30px;
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
const VerifyImage = styled.div`
  height: ${sizes.size5};
  width: ${sizes.size25};
  margin-left: ${sizes.size200};
  margin-top: ${sizes.size60};
`;
const WrapperRight = styled.div`
  background-color: white;
  height: ${sizes.size588};
  width: ${sizes.size480};
`;
const Title = styled.p`
  color: #2a2c30;
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin-top: ${sizes.size116};
  margin-left: ${sizes.size180};
  height: ${sizes.size30};
  width: ${sizes.size124};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
