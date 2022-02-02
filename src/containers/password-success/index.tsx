import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import passwordsuccess from "../../assets/password_success.png";
import closeButton from "../../assets/close_button.png";
import data from "./../../components/common/constants.json";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  angles,
} from "../../variables";
import Buttons from "../../components/common/button/index";
import { queries } from "../../components/common/breakpoints";
import Image from "../../components/common/image";
const PasswordSuccess = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowPasswordSuccess,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowPasswordSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
          <CloseImage
            src={closeButton}
            alt="cut"
            onClick={onCloseModal}
          ></CloseImage>
          <SuccessImageContainer>
            <SuccessImage src={passwordsuccess} />
          </SuccessImageContainer>
          <Title>{data.loginModal.passwordSuccess.title}</Title>
          <Discription>
            {data.loginModal.passwordSuccess.description}
          </Discription>
          <LoginButton>
            <LoginButtons
              className="colouredBgButton"
              type="button"
              name="LOGIN NOW"
            ></LoginButtons>
          </LoginButton>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default PasswordSuccess;
const Title = styled.p`
  font-family: ${fontFamilies.fontFamilyOsBold};
  height: ${sizes.size30};
  width: ${sizes.size70};
  color: ${colors.black_2a2c30};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin-top: ${sizes.size230};
  margin-left: ${sizes.size210};
  margin-bottom: -5px;
  ${queries.tabletLandscape} {
    margin-left: 165px;
    font-size: ${sizes.size20};
    margin-top: 190px;
  }
  ${queries.mobile} {
    margin-top: 130px;
    margin-left: 150px;
    font-size: ${sizes.size20};
    margin-bottom: 10px;
  }
`;
const SuccessImage = styled(Image)`
  margin-left: 0px;
  height: 150px;
  width: 180px;
  ${queries.tabletLandscape} {
    margin-left: 70px;
    height: 120px;
    width: 140px;
  }
  ${queries.mobile} {
    margin-left: 75px;
    height: 90px;
    width: 100px;
  }
`;
const LoginButtons = styled(Buttons)`
height: 50px;
  width: 380px;
  border-radius: ${sizes.size6};
  background: linear-gradient(${angles.angle138_33}, ${colors.red_f3698e} 0%, ${colors.yellow_feb456} 100%);
  box-shadow: 0 4px 10px 0 ${colors.red_f67e7e_38};
}
${queries.tabletLandscape} {
  height: 48px;
  width: 338px;
}
${queries.mobile} {
  height: 45px;
  width: 300px;
}
`;
const Discription = styled.p`
  margin-left: ${sizes.size90};
  word-wrap: break-word;
  width: ${sizes.size330};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
  ${queries.tabletLandscape} {
    margin-left: 35px;
    font-size: ${sizes.size14};
  }
  ${queries.mobile} {
    margin-left: 20px;
    font-size: ${sizes.size13};
    margin-top: -5x;
    margin-bottom: 60px;
  }
`;
const WrapperLeft = styled.div`
  background-image: url("../assets/image.png");
  height: ${sizes.size588};
  width: ${sizes.size480};
  text-align: left;
  padding-left: ${sizes.sizep4};
  margin-right: ${sizes.sizen40};
  ${queries.tabletLandscape} {
    width: 384px;
  }
  ${queries.mobile} {
    width: 346px;
    height: 388px;
    border-radius: ${sizes.size8};
  }
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
  line-height: ${sizes.size60};
  text-align: center;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size45};
  }
  ${queries.mobile} {
    margin-top: 100px;
    font-size: ${sizes.size45};
  }
`;
const BoldText = styled.span`
  font-weight: ${fontWeight.weight800};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
const TagLine = styled.div`
  height: ${sizes.size132};
  width: ${sizes.size330};
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size34};
  letter-spacing: -0.57px;
  line-height: ${sizes.size44};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  word-wrap: break-word;
  margin-top: 60px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size30};
  }
  ${queries.mobile} {
    margin-bottom: 50px;
  }
`;
const CloseImage = styled.img`
  float: right;
  margin: ${sizes.size20};
`;
const LoginButton = styled.div`
  margin-top: ${sizes.size80};
  margin-left: 20px;
  ${queries.tabletLandscape} {
    margin-top: 110px;
  }
  ${queries.mobile} {
    margin-top: 80px;
    margin-left: 6px;
  }
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
  ${queries.tabletLandscape} {
    width: 768px;
  }
  ${queries.mobile} {
    width: 360px;
    flex-direction: column;
  }
`;
const SuccessImageContainer = styled.div`
  height: ${sizes.size5};
  width: ${sizes.size25};
  margin-left: ${sizes.size150};
  margin-top: ${sizes.size120};
  ${queries.tabletLandscape} {
    margin-left: 55px;
  }
  ${queries.mobile} {
    margin-top: 60px;
  }
`;
const WrapperRight = styled.div`
  background-color: ${colors.white_ffffff};
  height: 588px;
  width: 470px;
  ${queries.tabletLandscape} {
    width: 385px;
  }
  ${queries.mobile} {
    width: 360px;
    height: 388px;
    border-radius: ${sizes.size8};
  }
`;
