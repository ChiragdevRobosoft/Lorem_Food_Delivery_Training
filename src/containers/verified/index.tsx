import React from "react";
import styled from "styled-components";
import backButton from "../../assets/backButton.png";
import icon_verified from "../../assets/icn_verified.png";
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
const Verified = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowPasswordSuccess,
  setShowVerified,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowPasswordSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVerified: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const submitForm = (data: any) => {
    console.log(data);
    setShowPasswordSuccess(true);
  };
  const schema = yup.object().shape({
    Password: yup.string().required("New Password is required"),
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
              setShowVerified(false);
            }}
          >
            <BackImage src={backButton} alt="cut"></BackImage>
          </BackButton>
          <VerifyImageContainer>
            <VerifyImage src={icon_verified} />
          </VerifyImageContainer>
          <Title>{data.loginModal.verified.title}</Title>
          <Discription>
            {data.loginModal.verified.description.line1} <br />
            {data.loginModal.verified.description.line2}
          </Discription>
          <Form onSubmit={handleSubmit(submitForm)}>
            <PasswordBox>
              <InputField
                name="Password"
                register={register}
                message={errors.Password?.message}
                isPassword={true}
              />
            </PasswordBox>
            <VerifyButton>
              <VerifyButtons
                className="colouredBgButton"
                name="VERIFY"
                type="submit"
              ></VerifyButtons>
            </VerifyButton>
          </Form>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default Verified;
const Form = styled.form``;
const PasswordBox = styled.div`
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
    margin-left: 100px;
    height: 50px;
    width: 65px;
  }
`;
const BackButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0%;
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
  ${queries.tabletLandscape} {
    margin-left: 140px;
    font-size: ${sizes.size20};
    margin-top: 120px;
  }
  ${queries.mobile} {
    margin-top: 60px;
    margin-left: 120px;
    font-size: ${sizes.size20};
    margin-bottom: 10px;
  }
`;
const Discription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  word-wrap: break-word;
  margin-top: -10px;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  text-align: center;
  width: 300px;
  color: ${colors.grey_4a4a4a};
  margin-bottom: 100px;
  ${queries.tabletLandscape} {
    margin-left: 50px;
    font-size: ${sizes.size14};
  }
  ${queries.mobile} {
    margin-left: 35px;
    font-size: ${sizes.size13};
    margin-top: -5x;
    margin-bottom: 60px;
  }
`;
const BackImage = styled.img`
  float: left;
  margin: 20px;
  border: 0;
  height: 17px;
  width: 17px;
`;
const WrapperLeft = styled.div`
  background-image: url("../assets/image.png");
  height: 588px;
  width: 480px;
  text-align: left;
  padding-left: 4%;
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
  height: 132px;
  width: 330px;
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
const VerifyButton = styled.div`
  margin-top: 100px;
  margin-left: 15px;
  ${queries.mobile} {
    margin-top: 72px;
    margin-left: 5px;
  }
`;
const Wrapper = styled.div`
  height: 588px;
  width: 960px;
  border-radius: ${sizes.size8};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 24px 0 ${colors.black_2a2c30};
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
  height: 5px;
  width: 25px;
  margin-left: 65px;
  margin-top: 10px;
  ${queries.tabletLandscape} {
    margin-left: 55px;
  }
  ${queries.mobile} {
    margin-top: -20px;
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
