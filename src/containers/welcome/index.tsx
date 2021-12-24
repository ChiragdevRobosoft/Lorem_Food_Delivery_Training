import React, { useState } from "react";
import styled from "styled-components";
import registerSuccess from "../../assets/register_success.png";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/button/index";
import closeButton from "../../assets/close_button.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  links,
} from "../../variables";
const RegisterSuccess = () => {
  const history = useNavigate();
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
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
          <SuccessImage>
            <img src={registerSuccess} className="registersuccess"></img>
          </SuccessImage>
          <Title>Hi Abdulla, Welcome to Zadoh</Title>
          <Discription>
            We’ve sent you an email on abdulla.mohammad for verification.
          </Discription>
          <BrowseButton>
            <Buttons
              className="colouredBgButton"
              name="BROWSE TO START ORDERING"
            ></Buttons>
          </BrowseButton>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default RegisterSuccess;
const CloseImage = styled.img`
  float: right;
  margin: 20px;
`;
const Discription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-left: 130px;
  height: 38px;
  width: 227px;
  color: #4a4a4a;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 19px;
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
const BrowseButton = styled.div`
  margin-top: 50px;
`;
const Button = styled.button`
  width: 5%;
  padding: 0;
  background-color: transparent;
  border: none;
  right: 0px;
  outline: none;
  position: absolute;
  top: 3%;
`;
const SuccessImage = styled.div`
  height: ${sizes.size5};
  width: ${sizes.size25};
  margin-left: 150px;
  margin-top: 120px;
`;
const WrapperRight = styled.div`
  background-color: white;
  height: ${sizes.size588};
  width: ${sizes.size48};
`;
const Title = styled.p`
  height: ${sizes.size54};
  width: ${sizes.size200};
  color: #2a2c30;
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: 27px;
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin-top: 210px;
  margin-left: 145px;
`;
