import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import icon_verify from "../../assets/icn_verify.png";
import { useNavigate, Link } from "react-router-dom";
import TextBox from "../../components/common/textbox";
import Buttons from "../../components/common/button/index";
import Modal from "react-responsive-modal";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";

const Verification = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowAccountDetails,
  setShowVerification,
  setShowCreateAccount,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVerification: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      center
      showCloseIcon={false}
      onClose={() => {
        setShowVerification(false);
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
          <Lorem>LOREM</Lorem>
          <TagLine>
            Experience the easiest a way to get <BoldText>great food </BoldText>
            Delivered
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
          <VerifyImage>
            <img src={icon_verify} className="icon_forgot"></img>
          </VerifyImage>
          <Title>Verification</Title>
          <Discription>
            We just sent you the OTP via SMS to your email address/mobile no.
            You should get it soon!
          </Discription>
          <TextBox name="Enter OTP" isPassword={false}></TextBox>
          <VerifyButton>
            <Buttons
              className="colouredBgButton"
              name="VERIFY"
              onClick={() => setShowAccountDetails(true)}
            ></Buttons>
          </VerifyButton>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default Verification;
const BackButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0%;
`;
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
  color: ${colors.grey5};
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
  color: ${colors.white};
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
  color: ${colors.white};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size34};
  letter-spacing: -0.57px;
  margin-top: 60px;
  line-height: ${sizes.size44};
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
const VerifyButton = styled.div`
  margin-top: 100px;
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
const VerifyImage = styled.div`
  height: ${sizes.size5};
  width: ${sizes.size25};
  margin-left: ${sizes.size200};
`;
const WrapperRight = styled.div`
  background-color: ${colors.white};
  height: 588px;
  width: 470px;
`;
const Title = styled.p`
  color: ${colors.black2};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white};
  margin-top: ${sizes.size116};
  margin-left: ${sizes.size180};
  height: ${sizes.size30};
  width: ${sizes.size124};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
