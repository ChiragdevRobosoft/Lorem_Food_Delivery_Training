import profileBackground from "../../../assets/profile/Bitmap.png";
import styled from "styled-components";
import Footer from "../../common/footer";
import data from "../../common/constants.json";
import {
  sizes,
  colors,
  fontFamilies,
  letterSpacing,
  opacity,
} from "../../../variables";
import PImage from "../../../assets/EditProfile/icn_icecream.png";
import Avatar2 from "../../../assets/EditProfile/icn_cupcake.png";
import Avatar3 from "../../../assets/EditProfile/icn_frenchfries.png";
import Avatar4 from "../../../assets/EditProfile/icn_burger.png";
import Avatar5 from "../../../assets/EditProfile/icn_chicken.png";
import Avatar6 from "../../../assets/EditProfile/icn_bread.png";
import Avatar7 from "../../../assets/EditProfile/icn_donut.png";
import Avatar8 from "../../../assets/EditProfile/icn_beer.png";
import Avatar9 from "../../../assets/EditProfile/icn_pizza.png";
import Header from "../../common/header";
import Label from "../../common/label";
import Image from "../../common/image";
import InputField from "../../common/textbox";
import Buttons from "../../common/button";
import Add from "../../../assets/EditProfile/icn_add_photo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EditProfile = () => {
  const AvatarURL = [
    PImage,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar9,
  ];
  const submitForm = (data: any) => {
    console.log(data);
  };
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Name: yup.string().required("Name is required"),
    MobileNumber: yup
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
    resolver: yupResolver(schema),
  });
  return (
    <Wrapper>
      <Header className="loggedin" />
      <ProfileBanner />
      <CenterContainer />
      <Footer />
      <EditProfileContainer>
        <EditProfileLabel content={data.editProfile.title} />
        <Form onSubmit={handleSubmit(submitForm)}>
          <MainContainer>
            <LeftContainer>
              <ProfileImageContainer>
                <ProfileImage src={PImage} />
                <AddImageContainer>
                  <AddImage src={Add} />
                </AddImageContainer>
              </ProfileImageContainer>
              <UsernameField>
                <InputField
                  name={data.editProfile.username}
                  register={register}
                  message={errors.Username?.message}
                  isPassword={false}
                />
              </UsernameField>
              <NameField>
                <InputField
                  name={data.editProfile.name}
                  register={register}
                  message={errors.Name?.message}
                  isPassword={false}
                />
              </NameField>
              <MobileNumberField>
                <InputField
                  name={data.editProfile.mobileNumber}
                  register={register}
                  message={errors.MobileNumber?.message}
                  isPassword={false}
                />
              </MobileNumberField>
            </LeftContainer>
            <LineBreak />
            <RightContainer>
              <TitleContainer>
                <TitleLabel content={data.editProfile.avatarTitle} />
              </TitleContainer>
              <AvatarContainer>
                {AvatarURL.map((url, index) => {
                  return <Avatars src={url} key={index} />;
                })}
              </AvatarContainer>
              <ButtonContainer>
                <SaveButton
                  className="colouredBgButton"
                  name={data.editProfile.save}
                  type="submit"
                />
              </ButtonContainer>
            </RightContainer>
          </MainContainer>
        </Form>
      </EditProfileContainer>
    </Wrapper>
  );
};
export default EditProfile;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Form = styled.form``;
const ProfileBanner = styled.div`
  background-image: url(${profileBackground});
  margin: 0;
  height: 262px;
  width: 100%;
`;
const CenterContainer = styled.div`
  width: 100%;
  height: 703px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 38px;
  background-color: ${colors.violet_f1f3fb};
`;
const EditProfileContainer = styled.div`
  height: 666px;
  width: 962px;
  top: 133px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`;
const EditProfileLabel = styled(Label)`
  height: 24px;
  width: 88px;
  color: ${colors.white_ffffff};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.spaceNeg0_3};
  line-height: ${sizes.size24};
`;
const MainContainer = styled.div`
  height: 628px;
  width: 961px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 57px 95px 37px 82px;
  box-sizing: border-box;
`;
const LeftContainer = styled.div`
  width: 492px;
`;
const ProfileImageContainer = styled.div`
  position: relative;
  height: 109px;
  width: 109px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
const AddImageContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 59px;
`;
const AddImage = styled(Image)``;
const RightContainer = styled.div`
  width: 467px;
`;

const LineBreak = styled.hr`
  margin: 0;
  box-sizing: border-box;
  height: 346px;
  border: 1px solid ${colors.grey_4a4a4a};
  opacity: ${opacity.opacity0_53};
  margin-bottom: 70px;
`;
const ProfileImage = styled(Image)`
  box-sizing: border-box;
  height: 106px;
  width: 106px;
  border: 3px solid ${colors.white_ffffff};
  margin-top: 0px;
`;
const UsernameField = styled.div`
  margin-top: 60px;
  width: 335px;
`;
const NameField = styled.div`
  margin-top: 50px;
  width: 335px;
`;
const MobileNumberField = styled.div`
  margin-top: 50px;
  width: 335px;
  margin-bottom: 150px;
`;
const TitleLabel = styled(Label)`
  height: 24px;
  width: 177px;
  color: ${colors.black_000000};
  font-size: ${sizes.size18};
  line-height: ${sizes.size24};
  margin-left: 69px;
`;
const AvatarContainer = styled.div`
  height: 311px;
  width: 303px;
  margin-left: 69px;
  margin-top: 23px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 14px;
`;
const SaveButton = styled(Buttons)`
  height: 50px;
  width: 158px;
  border-radius: ${sizes.size6};
  background: linear-gradient(
    138.33deg,
    ${colors.red_f3698e} 0%,
    ${colors.yellow_feb456} 100%
  );
  box-shadow: 0 4px 10px 0 ${colors.red_f67e7e_38};
  margin-left: 229px;
`;
const Avatars = styled(Image)`
  cursor: pointer;
`;
const TitleContainer = styled.div`
  margin-top: 47px;
`;
const ButtonContainer = styled.div`
  margin-top: 65px;
  margin-bottom: 0px;
`;
