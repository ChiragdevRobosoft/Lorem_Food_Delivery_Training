import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import { useNavigate, Link } from "react-router-dom";
import TextBox from "../../components/common/textbox";
import Buttons from "../../components/common/button/index";
import CountryCode from "../../components/country-code";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
const AccountDetails = () => {
  let navigate = useNavigate();
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
        <RedirectLink to={links.createAccount}>
          <BackImage src={backButton} alt="cut"></BackImage>
        </RedirectLink>
        <Title>Verified!</Title>
        <Discription>
          Your Email is verifeid. <br />
          Finally enter details below to create account.
        </Discription>
        <FirstName>
          <TextBox name="First Name" isPassword={false}></TextBox>
        </FirstName>
        <LastName>
          <TextBox name="Last Name" isPassword={false}></TextBox>
        </LastName>
        <CountryCode isOptional={true} />
        <TextBox name="Create Password" isPassword={true}></TextBox>
        <VerifyButton>
          <Buttons className="colouredBgButton" name="DONE"></Buttons>
        </VerifyButton>
      </WrapperRight>
    </Wrapper>
  );
};
export default AccountDetails;
const FirstName = styled.div`
  margin-bottom: 50px;
`;
const LastName = styled.div`
  margin-bottom: 50px;
`;
const RedirectLink = styled(Link)`
  text-decoration: none;
  border: none;
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
  background-color: ${colors.white};
  height: ${sizes.size588};
  width: ${sizes.size480};
`;
const Title = styled.p`
  width: ${sizes.size220};
  color: ${colors.black2};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: 175px;
  margin-top: ${sizes.size50};
  letter-spacing: ${sizes.sizenp47};
  line-height: ${sizes.size38};
  text-shadow: 0 0 9px 0 ${colors.white};
`;
const Lorem = styled.p`
  height: ${sizes.size60};
  width: ${sizes.size103};
  color: ${colors.white};
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
const Wrapper = styled.div`
  height: ${sizes.size588};
  width: ${sizes.size960};
  border-radius: ${sizes.size8};
  background-color: ${colors.white};
  box-shadow: 0 2px 24px 0 ${colors.black3};
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
const TagLine = styled.div`
  height: ${sizes.size132};
  width: ${sizes.size330};
  color: ${colors.white};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 34px;
  letter-spacing: -0.57px;
  line-height: 44px;
  margin-top: 60px;
  text-shadow: 0 0 9px 0 ${colors.white};
  word-wrap: break-word;
`;
const BackImage = styled.img`
  float: left;
  margin: ${sizes.size20};
  border: 0;
  height: ${sizes.size17};
  width: ${sizes.size17};
`;
const Discription = styled.p`
  margin-left: 83px;
  margin-top: -10px;
  word-wrap: break-word;
  height: ${sizes.size60};
  width: ${sizes.size296};
  color: ${colors.grey5};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
`;
const VerifyButton = styled.div`
  margin-top: -20px;
  margin-top: 80px;
`;
