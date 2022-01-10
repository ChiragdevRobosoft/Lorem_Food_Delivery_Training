import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import icon_verify from "../../assets/icn_verify.png";
import TextBox from "../../components/common/textbox";
import Buttons from "../../components/common/button/index";
import Modal from "react-responsive-modal";
import data from "./../../components/common/constants.json";
import { sizes, colors, fontFamilies, fontWeight } from "../../variables";
const Verification = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowAccountDetails,
  setShowVerification,
  setShowCreateAccount,
  setShowVerified,
  redirectFromForgotPassword,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVerification: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVerified: React.Dispatch<React.SetStateAction<boolean>>;
  redirectFromForgotPassword: boolean;
}) => {
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
          <Title>{data.loginModal.passwordVerification.title}</Title>
          <Discription>
            {data.loginModal.passwordVerification.description}
          </Discription>
          <TextBox name="Enter OTP" isPassword={false}></TextBox>
          <VerifyButton>
            <Buttons
              className="colouredBgButton"
              name="VERIFY"
              onClick={() => {
                redirectFromForgotPassword
                  ? setShowVerified(true)
                  : setShowAccountDetails(true);
              }}
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
  margin-left: 130px;
  margin-bottom: 80px;
  word-wrap: break-word;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
  height: 60px;
  width: 220px;
  color: ${colors.grey_4a4a4a};
`;
const WrapperLeft = styled.div`
  background-image: url("../assets/image.png");
  height: 588px;
  width: 480px;
  text-align: left;
  padding-left: ${sizes.sizep4};
  margin-right: -40px;
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
  line-height: ${sizes.size60};
  text-align: center;
`;
const BoldText = styled.span`
  font-weight: ${fontWeight.weight800};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
const TagLine = styled.div`
  height: 132px;
  width: 330px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size34};
  letter-spacing: -0.57px;
  margin-top: 60px;
  line-height: 44px;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  word-wrap: break-word;
`;
const BackImage = styled.img`
  float: left;
  margin: 20px;
  border: 0;
  height: 17px;
  width: 17px;
`;
const VerifyButton = styled.div`
  margin-top: 100px;
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
const VerifyImage = styled.div`
  height: 5px;
  width: 25px;
  margin-left: 200px;
`;
const WrapperRight = styled.div`
  background-color: ${colors.white_ffffff};
  height: 588px;
  width: 470px;
`;
const Title = styled.p`
  color: ${colors.black_2a2c30};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin-top: 116px;
  margin-left: 180px;
  height: 30px;
  width: 124px;
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
