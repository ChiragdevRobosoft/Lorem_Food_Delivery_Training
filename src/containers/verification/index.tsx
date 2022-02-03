import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import icon_verify from "../../assets/icn_verify.png";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/common/textbox";
import Buttons from "../../components/common/button/index";
import Modal from "react-responsive-modal";
import data from "./../../components/common/constants.json";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  angles,
} from "../../variables";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { queries } from "../../components/common/breakpoints";
import Image from "../../components/common/image";
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
  const submitForm = (data: any) => {
    console.log(data);
    redirectFromForgotPassword
      ? setShowVerified(true)
      : setShowAccountDetails(true);
  };
  const schema = yup.object().shape({
    EnterOTP: yup.string().required("OTP is required"),
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
          <VerifyImageContainer>
            <VerifyImage src={icon_verify} />
          </VerifyImageContainer>
          <Title>{data.loginModal.passwordVerification.title}</Title>
          <Discription>
            {data.loginModal.passwordVerification.description}
          </Discription>
          <Form onSubmit={handleSubmit(submitForm)}>
            <TextField>
              <InputField
                name="EnterOTP"
                register={register}
                message={errors.EnterOTP?.message}
                isPassword={false}
              />
            </TextField>
            <VerifyButton>
              <VerifyButtons
                className="colouredBgButton"
                name="VERIFY"
                type="submit"
              />
            </VerifyButton>
          </Form>
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
const VerifyImage = styled(Image)`
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
const VerifyButtons = styled(Buttons)`
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
const TextField = styled.div`
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
  color: ${colors.grey_4a4a4a};
  ${queries.tabletLandscape} {
    margin-left: 80px;
    font-size: ${sizes.size14};
  }
  ${queries.mobile} {
    margin-left: 70px;
    font-size: ${sizes.size13};
    margin-top: -5x;
    margin-bottom: 50px;
  }
`;
const Form = styled.form``;
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
  margin-top: 60px;
  line-height: ${sizes.size44};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  ${queries.tabletLandscape} {
    font-size: ${sizes.size30};
  }
  ${queries.mobile} {
    margin-bottom: 50px;
  }
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
  ${queries.mobile} {
    margin-top: 67px;
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
const VerifyImageContainer = styled.div`
  margin-top: 5px;
  margin-left: 50px;
  ${queries.mobile} {
    margin-top: -40px;
    margin-left: 50px;
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
  color: ${colors.black_2a2c30};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin-top: 40px;
  margin-left: 170px;
  height: ${sizes.size30};
  width: ${sizes.size124};
  font-family: ${fontFamilies.fontFamilyOsBold};
  ${queries.tabletLandscape} {
    margin-left: 130px;
    font-size: ${sizes.size20};
    margin-top: 30px;
  }
  ${queries.mobile} {
    margin-top: 10px;
    margin-left: 120px;
    font-size: ${sizes.size20};
    margin-bottom: 10px;
  }
`;
