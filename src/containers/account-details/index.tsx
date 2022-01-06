import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import { useNavigate, Link } from "react-router-dom";
import TextBox from "../../components/common/textbox";
import Buttons from "../../components/common/button/index";
import CountryCode from "../../components/country-code";
import Modal from "react-responsive-modal";
import data from "./../../components/common/constants.json";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
const AccountDetails = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowRegisterSuccess,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowRegisterSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  let navigate = useNavigate();
  return (
    <Modal
      open={open}
      center
      showCloseIcon={false}
      onClose={() => {
        onCloseModal();
      }}
      styles={{
        overlay: {
          background: "transparent",
        },
      }}
    >
      <Wrapper>
        <WrapperLeft>
          <Lorem>{data.loginModal.accountsDetails.lorem}</Lorem>
          <TagLine>
            {data.loginModal.accountsDetails.tagLine.line1}
            <BoldText>{data.loginModal.accountsDetails.tagLine.line2}</BoldText>
            {data.loginModal.accountsDetails.tagLine.line3}
          </TagLine>
        </WrapperLeft>
        <WrapperRight>
          <BackButton
            onClick={() => {
              onCloseModal();
            }}
          >
            <BackImage src={backButton} alt="cut"></BackImage>
          </BackButton>
          <Title>{data.loginModal.accountsDetails.title}</Title>
          <Discription>
            {data.loginModal.accountsDetails.description.line1}
            <br />
            {data.loginModal.accountsDetails.description.line2}
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
            <Buttons
              className="colouredBgButton"
              name="DONE"
              onClick={() => setShowRegisterSuccess(true)}
            ></Buttons>
          </VerifyButton>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
const BackButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0%;
`;
export default AccountDetails;
const FirstName = styled.div`
  margin-bottom: 50px;
`;
const LastName = styled.div`
  margin-bottom: 50px;
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
  width: ${sizes.size220};
  color: ${colors.black_2a2c30};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: 175px;
  letter-spacing: ${sizes.sizen47};
  line-height: 1px;
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
  color: ${colors.grey_4a4a4a};
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
