import React, { useState } from "react";
import styled from "styled-components";
import closeButton from "../../assets/close_button.png";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import InputField from "../../components/common/textbox";
import data from "./../../components/common/constants.json";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  angles,
  links,
} from "../../variables";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Buttons from "../../components/common/button/index";
import { queries } from "../../components/common/breakpoints";
const CreateAccount = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowCreateAccount,
  redirectFromLogin,
  setRedirectFromLogin,
  setShowLogin,
  setRedirectFromRegister,
  setShowAccountDetails,
  setShowVerification,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
  redirectFromLogin: boolean;
  setRedirectFromLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setRedirectFromRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVerification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const submitForm = (data: any) => {
    console.log(data);
    setShowVerification(true);
  };
  const schema = yup.object().shape({
    Email: yup
      .string()
      .email("Invalid email address")
      .required("Email id is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Modal
      open={open}
      center
      showCloseIcon={false}
      onClose={() => {
        setRedirectFromLogin(false);
        onCloseModal();
      }}
      styles={{
        overlay: {
          background: redirectFromLogin ? "transparent" : "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <Wrapper>
        <WrapperLeft>
          <Lorem>{data.loginModal.title}</Lorem>
          <TagLine>
            {data.loginModal.tagline.line1}{" "}
            <BoldText>{data.loginModal.tagline.line2} </BoldText>
            {data.loginModal.tagline.line3}
          </TagLine>
        </WrapperLeft>
        <WrapperRight>
          <CloseImage
            src={closeButton}
            alt="cut"
            onClick={() => {
              setRedirectFromLogin(false);
              onCloseModal();
            }}
          ></CloseImage>
          <Title>{data.loginModal.createAccount.title}</Title>
          <Discription>{data.loginModal.createAccount.description}</Discription>
          <Form onSubmit={handleSubmit(submitForm)}>
            <EmailBox>
              <InputField
                name="Email"
                register={register}
                message={errors.Email?.message}
                isPassword={false}
              />
            </EmailBox>
            <CreateAccountButtonContainer>
              <CreateAccountButton
                className="colouredBgButton"
                name="CREATE ACCOUNT"
                type="submit"
              ></CreateAccountButton>
            </CreateAccountButtonContainer>
          </Form>
          <TermsAndCondition>
            <Terms>{data.loginModal.createAccount.terms}</Terms>
            <RedirectLink className="termsConditions" to={links.login}>
              {data.loginModal.createAccount.termsAndCondition}
            </RedirectLink>
          </TermsAndCondition>
          <SocialMedia>
            <FacebookButton name="Facebook" />
            <GoogleButton name="Google+" />
          </SocialMedia>
          <Footer>
            <LoginLink>{data.loginModal.createAccount.accountLogin}</LoginLink>
            <LoginButton
              onClick={() => {
                setRedirectFromRegister(false);
                setRedirectFromLogin(false);
                setShowLogin(true);
                onCloseModal();
              }}
            >
              Login
            </LoginButton>
          </Footer>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default CreateAccount;
const CreateAccountButton = styled(Buttons)`
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
  height: 48px;
  width: 300px;
}
`;
const CreateAccountButtonContainer = styled.div`
  margin-top: 60px;
  ${queries.mobile} {
    margin-top: 30px;
  }
`;
const EmailBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  ${queries.tabletLandscape} {
    width: 320px;
  }
  ${queries.mobile} {
    width: 300px;
    margin-bottom: 20px;
  }
`;
const Form = styled.form``;
const Discription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  height: ${sizes.size50};
  width: ${sizes.size280};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${sizes.size20};
  text-align: center;
  margin-top: -20px;
  margin-left: 100px;
  ${queries.tabletLandscape} {
    margin-left: 50px;
    font-size: ${sizes.size13};
  }
  ${queries.mobile} {
    margin-left: 40px;
    font-size: ${sizes.size13};
    margin-top: -35px;
    margin-bottom: 30px;
  }
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
  ${queries.tabletLandscape} {
    font-size: ${sizes.size30};
  }
  ${queries.mobile} {
    margin-bottom: 50px;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  width: ${sizes.size400};
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  ${queries.tabletLandscape} {
    width: 355px;
  }
  ${queries.mobile} {
    width: 310px;
    margin-top: -10px;
  }
`;
const LoginLink = styled.p`
  height: ${sizes.size19};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 20px;
  letter-spacing: -0.25px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
  }
  ${queries.mobile} {
    font-size: ${sizes.size12};
  }
`;
const CloseImage = styled.img`
  float: right;
  margin: 20px;
`;
const LoginButton = styled.button`
  color: ${colors.orange_f67e03};
  text-decoration: none;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-left: 10px;
  float: right;
  margin-right: 70px;
  margin-top: 15px;
  margin-bottom: ${sizes.size30};
  padding-top: 0;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
    margin-top: 12px;
  }
  ${queries.mobile} {
    margin-top: 12px;
    font-size: ${sizes.size12};
    margin-left: 7px;
  }
`;
const RedirectLink = styled(Link)`
  color: ${colors.orange_f67e03};
  text-decoration: none;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-left: ${(props) =>
    props.className === "termsConditions" ? "-20px" : "10px"};
  float: right;
  margin-right: 70px;
  margin-top: ${(props) =>
    props.className === "termsConditions" ? "-40px" : "15px"};
  margin-bottom: ${sizes.size30};
  padding-top: 0;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
    margin-right: 55px;
  }
  ${queries.mobile} {
    font-size: ${sizes.size12};
    margin-top: ${(props) =>
      props.className === "termsConditions" ? "-20px" : "15px"};
    margin-right: 40px;
  }
`;
const Footer = styled.div`
  flex-direction: row;
  margin-bottom: ${sizes.size20};
  margin-top: 10px;
  display: flex;
  align-self: center;
  margin-left: 130px;
  margin-right: auto;
  width: ${sizes.size500};
  ${queries.tabletLandscape} {
    margin-left: 80px;
  }
  ${queries.mobile} {
    margin-left: 70px;
    margin-top: 0px;
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
  height: ${sizes.size59};
  width: ${sizes.size318};
  color: ${colors.black_2a2c30};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  letter-spacing: -0.47px;
  line-height: 38px;
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin-top: 70px;
  margin-left: 80px;
  ${queries.tabletLandscape} {
    margin-left: 40px;
    font-size: ${sizes.size25};
  }
  ${queries.mobile} {
    margin-left: 50px;
    font-size: ${sizes.size22};
    margin-top: 10px;
    margin-bottom: 20px;
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
  line-height: 60px;
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
const Terms = styled.p`
  height: ${sizes.size19};
  width: ${sizes.size460};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  line-height: 19px;
  margin-bottom: 20px;
  margin-left: 60px;
  margin-top: 40px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
    margin-left: 40px;
  }
  ${queries.mobile} {
    font-size: ${sizes.size12};
    margin-bottom: 0px;
    margin-left: 35px;
  }
`;
const TermsAndCondition = styled.div`
  height: ${sizes.size19};
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  margin-bottom: ${sizes.size20};
  margin-top: ${sizes.size40};
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
  }
  ${queries.mobile} {
    font-size: ${sizes.size12};
    margin-top: -20px;
    margin-bottom: 0px;
  }
`;
const FacebookButton = styled(Buttons)`
  color: ${colors.blue_2c79bd};
  fontfamily: ${fontFamilies.fontFamilyOsSemiBold};
  fontsize: ${sizes.size16};
  height: 50px;
  width: 180px;
  border: 1px solid ${colors.blue_02a7fd};
  borderradius: ${sizes.size6};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  ${queries.tabletLandscape} {
    height: 40px;
    width: 150px;
  }
  ${queries.mobile} {
    height: 40px;
    width: 140px;
  }
`;
const GoogleButton = styled(Buttons)`
  color: ${colors.pink_d34836};
  fontfamily: ${fontFamilies.fontFamilyOsSemiBold};
  fontsize: ${sizes.size16};
  height: 50px;
  width: 180px;
  border: 1px solid ${colors.pink_ff8c7d};
  borderradius: ${sizes.size6};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  ${queries.tabletLandscape} {
    height: 40px;
    width: 150px;
  }
  ${queries.mobile} {
    height: 40px;
    width: 140px;
  }
`;
