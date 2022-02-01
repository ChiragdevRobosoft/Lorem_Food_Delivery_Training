import React from "react";
import styled from "styled-components";
import closeButton from "../../assets/close_button.png";
import Buttons from "../../components/common/button/index";
import { useNavigate } from "react-router-dom";
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
} from "../../variables";
import { queries } from "../../components/common/breakpoints";
const Login = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowForgotPassword,
  setShowCreateAccount,
  setRedirectFromLogin,
  setRedirectFromRegister,
  redirectFromRegister,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
  setRedirectFromLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setRedirectFromRegister: React.Dispatch<React.SetStateAction<boolean>>;
  redirectFromRegister: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      classNames={{ modal: "modalStyle" }}
      onClose={() => {
        setRedirectFromRegister(false);
        onCloseModal();
      }}
      center
      showCloseIcon={false}
      styles={{
        overlay: {
          background: redirectFromRegister
            ? "transparent"
            : "rgba(0, 0, 0, 0.7)",
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
              setRedirectFromRegister(false);
              onCloseModal();
            }}
          ></CloseImage>
          <Title>{data.loginModal.login.title}</Title>
          <EmailBox>
            <InputField name="Email" isPassword={false} />
          </EmailBox>
          <PasswordBox>
            <InputField name="Password" isPassword={true} />
          </PasswordBox>
          <ForgetButton onClick={() => setShowForgotPassword(true)}>
            {data.loginModal.login.forgot}
          </ForgetButton>
          <LoginButton className="colouredBgButton" name="LOGIN"></LoginButton>
          <SocialMedia>
            <FacebookButton name="Facebook" />
            <GoogleButton name="Google+" />
          </SocialMedia>
          <Footer>
            <ForgotPasswordLink>
              {data.loginModal.login.createAccount}
            </ForgotPasswordLink>
            <NewLinkButton
              onClick={() => {
                setRedirectFromLogin(true);
                setShowCreateAccount(true);
              }}
            >
              {data.loginModal.login.getNewOne}
            </NewLinkButton>
          </Footer>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default Login;
const ForgetButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.grey_4a4a4a};
  text-decoration: none;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  border: none;
  background-color: transparent;
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  line-height: ${sizes.size19};
  margin-right: 40px;
  float: right;
  margin-bottom: 30px;
  padding-top: 0;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
    margin-right: 30px;
  }
  ${queries.mobile} {
    font-size: ${sizes.size12};
    margin-right: 30px;
    margin-bottom: 10px;
    margin-top: -20px;
  }
`;
const EmailBox = styled.div`
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  ${queries.tabletLandscape} {
    width: 320px;
  }
  ${queries.mobile} {
    width: 300px;
    margin-bottom: 40px;
  }
`;
const PasswordBox = styled.div`
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  ${queries.tabletLandscape} {
    width: 320px;
  }
  ${queries.mobile} {
    width: 300px;
    margin-bottom: 40px;
  }
`;
const TagLine = styled.div`
  height: 132px;
  width: 330px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size34};
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
  width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  ${queries.tabletLandscape} {
    width: 355px;
  }
  ${queries.mobile} {
    width: 310px;
    margin-top: 20px;
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
const LoginButton = styled(Buttons)`
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
const ForgotPasswordLink = styled.p`
  height: 19px;
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  margin-bottom: 20px;
  margin-top: 40px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
  }
  ${queries.mobile} {
    margin-top: 20px;
    font-size: ${sizes.size12};
  }
`;
const CloseImage = styled.img`
  float: right;
  margin: 20px;
`;
const NewLinkButton = styled.button`
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
  margin-right: 50px;
  margin-top: 40px;
  margin-bottom: 30px;
  padding-top: 0;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
  }
  ${queries.mobile} {
    margin-top: 20px;
    font-size: ${sizes.size12};
  }
`;
const Footer = styled.div`
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: -10px;
  display: flex;
  align-self: center;
  margin-left: 125px;
  margin-right: auto;
  ${queries.tabletLandscape} {
    margin-left: 80px;
  }
  ${queries.mobile} {
    margin-left: 80px;
  }
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
  height: 588px;
  width: 480px;
  text-align: left;
  padding-left: ${sizes.sizep4};
  margin-right: -40px;
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
  height: 38px;
  width: 300px;
  color: ${colors.black_2a2c30};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: 50px;
  margin-bottom: 60px;
  margin-top: 50px;
  letter-spacing: ${sizes.sizen47};
  line-height: ${sizes.size38};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  ${queries.tabletLandscape} {
    margin-left: 85px;
    font-size: ${sizes.size25};
  }
  ${queries.mobile} {
    margin-left: 95px;
    font-size: ${sizes.size22};
    margin-top: 20px;
    margin-bottom: 20px;
  }
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
