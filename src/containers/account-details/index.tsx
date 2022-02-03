import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/common/textbox";
import Buttons from "../../components/common/button/index";
import CountryCode from "../../components/country-code";
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
  const submitForm = (data: any) => {
    console.log(data);
    setShowRegisterSuccess(true);
  };
  const schema = yup.object().shape({
    FirstName: yup.string().required("First Name is required"),
    LastName: yup.string().required("Last Name is required"),
    mobile: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Invalid mobile number")
      .max(10, "Invalid mobile number"),
    CreatePassword: yup.string().required("Password is required"),
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
          <Form onSubmit={handleSubmit(submitForm)}>
            <FirstName>
              <InputField
                name="FirstName"
                register={register}
                message={errors.FirstName?.message}
                isPassword={false}
              />
            </FirstName>
            <LastName>
              <InputField
                name="LastName"
                register={register}
                message={errors.LastName?.message}
                isPassword={false}
              />
            </LastName>
            <NumberContainer>
              <CountryCode
                register={register}
                message={errors.Email?.message}
                isOptional={true}
              />
            </NumberContainer>
            <PasswordField>
              <InputField
                name="CreatePassword"
                register={register}
                message={errors.CreatePassword?.message}
                isPassword={true}
              />
            </PasswordField>
            <VerifyButton>
              <DoneButton className="colouredBgButton" name="DONE"></DoneButton>
            </VerifyButton>
          </Form>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default AccountDetails;

const BackButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0%;
`;
const FirstName = styled.div`
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  ${queries.tabletLandscape} {
    width: 320px;
  }
  ${queries.mobile} {
    width: 300px;
    margin-bottom: 20px;
    margin-top: -15px;
  }
`;
const LastName = styled.div`
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  ${queries.tabletLandscape} {
    width: 320px;
  }
  ${queries.mobile} {
    width: 300px;
    margin-bottom: 55px;
  }
`;
const PasswordField = styled.div`
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
const NumberContainer = styled.div`
  margin-bottom: -20px;
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
  width: ${sizes.size220};
  color: ${colors.black_2a2c30};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size28};
  font-weight: bold;
  margin-left: 175px;
  letter-spacing: ${sizes.sizen47};
  line-height: 1px;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  ${queries.tabletLandscape} {
    margin-left: 145px;
    font-size: ${sizes.size25};
    margin-top: 0px;
    margin-bottom: 50px;
  }
  ${queries.mobile} {
    margin-left: 140px;
    font-size: ${sizes.size22};
    margin-top: -30px;
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
const DoneButton = styled(Buttons)`
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
const VerifyButton = styled.div`
  margin-top: 41px;
  ${queries.mobile} {
    margin-top: 18px;
  }
`;
