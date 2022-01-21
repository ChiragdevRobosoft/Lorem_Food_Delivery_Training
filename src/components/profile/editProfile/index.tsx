import profileBackground from "../../../assets/profile/Bitmap.png";
import styled from "styled-components";
import Footer from "../../common/footer";
import data from "../../../components/common/constants.json";
import { sizes, colors, fontFamilies } from "../../../variables";

import Header from "../../common/header";
import Label from "../../common/label";
const EditProfile = () => {
  return (
    <Wrapper>
      <Header className="loggedin" />
      <ProfileBanner></ProfileBanner>
      <CenterContainer></CenterContainer>
      <Footer />
      <EditProfileContainer>
        <EditProfileLabel content="Edit Profile" />
        <MainContainer></MainContainer>
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
  margin-left: auto;
  margin-right: auto;
  position: absolute;
`;
const EditProfileLabel = styled(Label)`
  height: 24px;
  width: 88px;
  color: ${colors.white_ffffff};
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 24px;
`;
const MainContainer = styled.div`
  height: 628px;
  width: 961px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 14px;
`;
