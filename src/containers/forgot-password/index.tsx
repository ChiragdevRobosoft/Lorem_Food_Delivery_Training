import React, { useState } from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import icon_forgot from "../../assets/icn_forgot.png";
import Buttons from "../../components/common/button/index";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/common/textbox";
import Underline from "../../assets/underline.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CountryCode from "../../components/country-code";
import data from "./../../components/common/constants.json";
import Image from "../../components/common/image";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  angles,
} from "../../variables";
import { queries } from "../../components/common/breakpoints";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ForgotPassword = ({
  onCloseModal,
  onOpenModal,
  redirectFromForgotPassword,
  setRedirectFromForgotPassword,
  open,
  setShowForgotPassword,
  setShowVerification,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  redirectFromForgotPassword: boolean;
  setRedirectFromForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVerification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [InputType, setInputType] = useState("email");

  const emailSchema = yup.object().shape({
    Email: yup
      .string()
      .required("Email id is required ")
      .email("Invalid email address"),
  });
  const mobileSchema = yup.object().shape({
    mobile: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Invalid mobile number")
      .max(10, "Invalid mobile number"),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setError: setError2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(mobileSchema),
  });
  const submitForm = (data: any) => {
    console.log(data);
    setShowVerification(true);
    setRedirectFromForgotPassword(true);
  };

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
          <BackButton
            onClick={() => {
              setShowForgotPassword(false);
            }}
          >
            <BackImage src={backButton} alt="cut"></BackImage>
          </BackButton>
          <ImageContainer>
            <ForgotImage src={icon_forgot} />
          </ImageContainer>
          <Title>{data.loginModal.forgetPassword.title}</Title>
          <Discription>
            {data.loginModal.forgetPassword.description}
          </Discription>
          <Navbar>
            <TypeContainer>
              <InputTypeButton
                type="button"
                onClick={() => setInputType("email")}
                className={InputType === "email" ? "boldButton" : "null"}
              >
                {data.loginModal.forgetPassword.email}
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
                {data.loginModal.forgetPassword.mobileNumber}
              </InputTypeButton>
              {InputType === "mobile" ? (
                <Border src={Underline} alt="border" />
              ) : null}
            </TypeContainer>
          </Navbar>

          {InputType === "email" ? (
            <Form onSubmit={handleSubmit(submitForm)}>
              <EmailBox>
                <InputField
                  name="Email"
                  register={register}
                  message={errors.Email?.message}
                  isPassword={false}
                />
              </EmailBox>
              <SendOtpButton
                className="colouredBgButton"
                name="SEND OTP"
                type="submit"
              ></SendOtpButton>
            </Form>
          ) : (
            <Form onSubmit={handleSubmit2(submitForm)}>
              <CountryCode
                register={register2}
                message={errors2.mobile?.message}
                isOptional={true}
              />
              <ButtonContainer>
                <SendOtpButton
                  className="colouredBgButton"
                  name="SEND OTP"
                  type="submit"
                ></SendOtpButton>
              </ButtonContainer>
            </Form>
          )}
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default ForgotPassword;
const EmailBox = styled.div`
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  margin-top: -15px;
  ${queries.tabletLandscape} {
    width: 320px;
  }
  ${queries.mobile} {
    width: 320px;
    margin-top: -35px;
    margin-bottom: 30px;
  }
`;
const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Form = styled.form``;
const Border = styled.img`
  height: ${sizes.size4};
  width: ${sizes.size38};
  margin-top: ${sizes.size5};
  padding-left: ${sizes.size1};
`;
const BackButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0%;
`;
const BackImage = styled.img`
  float: left;
  margin: ${sizes.size20};
  border: 0;
  height: ${sizes.size17};
  width: ${sizes.size17};
`;
const ImageContainer = styled.div`
  margin-top: 5px;
  margin-left: 50px;
  ${queries.mobile} {
    margin-top: -40px;
    margin-left: 50px;
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
  .boldButton {
    color: ${colors.black_000000};
    font-weight: ${fontWeight.weight600};
  }
  ${queries.tabletLandscape} {
    width: 768px;
  }
  ${queries.mobile} {
    width: 360px;
    flex-direction: column;
  }
`;
const ForgotImage = styled(Image)`
  margin-left: 135px;
  height: 88px;
  width: 107px;
  ${queries.tabletLandscape} {
    margin-left: 105px;
    height: 80px;
    width: 105px;
  }
  ${queries.mobile} {
    margin-left: 105px;
    height: 50px;
    width: 65px;
  }
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
  ${queries.tabletLandscape} {
    margin-left: 30px;
  }
  ${queries.mobile} {
    margin-left: 30px;
    margin-top: 10px;
  }
`;
const ButtonContainer = styled.div`
  ${queries.mobile} {
    margin-top: -20px;
  }
`;
const SendOtpButton = styled(Buttons)`
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
const InputTypeButton = styled.button`
  height: ${sizes.size24};
  opacity: 0.66;
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: -0.43px;
  line-height: ${sizes.size24};
  background-color: transparent;
  border: none;
  padding: 0;
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
const Title = styled.p`
  font-family: ${fontFamilies.fontFamilyOsRegular};
  height: ${sizes.size30};
  width: ${sizes.size183};
  color: ${colors.black_2a2c30};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin-top: 30px;
  margin-left: 140px;
  ${queries.tabletLandscape} {
    margin-left: 110px;
    font-size: ${sizes.size20};
    margin-top: 30px;
  }
  ${queries.mobile} {
    margin-top: 10px;
    margin-left: 85px;
    font-size: ${sizes.size20};
    margin-bottom: 10px;
  }
`;
const Discription = styled.p`
  margin-left: ${sizes.size90};
  word-wrap: break-word;
  height: ${sizes.size60};
  width: ${sizes.size296};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
  ${queries.tabletLandscape} {
    margin-left: 50px;
    font-size: ${sizes.size13};
  }
  ${queries.mobile} {
    margin-left: 30px;
    font-size: ${sizes.size13};
    margin-top: -5x;
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
  margin-top: 60px;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  word-wrap: break-word;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size30};
  }
  ${queries.mobile} {
    margin-bottom: 50px;
  }
`;
