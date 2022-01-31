import profileBackground from "../../assets/profile/Bitmap.png";
import MobileIcon from "../../assets/profile/phone_icn.png";
import MailIcon from "../../assets/profile/mail_icn.png";
import InfoIcon from "../../assets/profile/icn_info_small.png";
import styled from "styled-components";
import Footer from "../common/footer";
import data from "../../components/common/constants.json";
import { sizes, colors, fontFamilies, opacity, links } from "../../variables";
import Label from "../common/label";
import Navbar from "../common/Navbar";
import { Outlet, Link } from "react-router-dom";
import Image from "../common/image";
import Header from "../common/header";
import PImage from "../../assets/profile/icn_icecream.png";
import { queries } from "../common/breakpoints";

const Profile = () => {
  return (
    <Wrapper>
      <Header className="loggedin"></Header>
      <ProfileBanner>
        <CenterContainer>
          <UserProfile>
            <ProfileImage src={PImage} />
            <ProfileInfo>
              <NameLine>
                <NameLabel content={data.profile.name} />
                <EditLink to={links.editProfile}>
                  <EditLabel content={data.profile.edit} />
                </EditLink>
              </NameLine>
              <FullNameLabel content={data.profile.fullName} />
              <DetailsRow>
                <DetailContainer>
                  <Icon src={MobileIcon} />
                  <InfoLabel content={data.profile.mobileNumber} />
                </DetailContainer>
                <LineBreak />
                <DetailContainer>
                  <Icon src={MailIcon} />
                  <InfoLabel content={data.profile.emailAddress} />
                </DetailContainer>
                <LineBreak />
                <DetailContainer>
                  <InfoLabel content={data.profile.creditEarned} />
                  <InfoCreditLabel content={data.profile.creditData} />
                  <Icon src={InfoIcon} />
                </DetailContainer>
              </DetailsRow>
            </ProfileInfo>
          </UserProfile>
          <NavbarContainer>
            <Navbar navbarElements={data.ProfileNavbarElements} />
          </NavbarContainer>
        </CenterContainer>
      </ProfileBanner>
      <RoutingContainer>
        <Outlet />
      </RoutingContainer>
      <Footer />
    </Wrapper>
  );
};
export default Profile;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ProfileBanner = styled.div`
  background-image: url(${profileBackground});
  margin: 0;
  height: 262px;
  width: 100%;
`;
const CenterContainer = styled.div`
  width: 958px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 38px;
  ${queries.tablet} {
    padding-top: 30px;
  }
`;
const UserProfile = styled.div`
  height: 113px;
  width: 814.5px;
  display: flex;
  flex-direction: row;
`;
const EditLink = styled(Link)`
  text-decoration: none;
  margin-top: 17px;
`;
const ProfileImage = styled(Image)`
  height: 106px;
  width: 106px;
  border: 3px solid ${colors.white_ffffff};
  box-shadow: 0 2px 3px 0 ${colors.black_000000_3};
  border-radius: ${sizes.size100};
  box-sizing: border-box;
  ${queries.tablet} {
    height: 80px;
    width: 80px;
  }
  ${queries.mobile} {
    width: 50px;
    height: 50px;
  }
  ${queries.smallMobile} {
    width: 50px;
    height: 50px;
  }
`;
const ProfileInfo = styled.div`
  text-align: left;
  margin-left: 58px;
  ${queries.mobile} {
    margin-left: 20px;
  }
  ${queries.mobile} {
    margin-left: 20px;
  }
  ${queries.smallMobile} {
    margin-left: 20px;
  }
`;
const NameLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
`;
const DetailsRow = styled.div`
  width: 653px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 33px;
  margin-top: 16px;
  ${queries.tablet} {
    width: 500px;
    height: 15px;
    flex-flow: row wrap;
  }
  ${queries.mobile} {
    width: 320px;
    flex-flow: row wrap;
  }
  ${queries.smallMobile} {
    width: 200px;
    flex-flow: row wrap;
  }
`;
const Icon = styled(Image)`
  object-fit: none;
  margin-right: 17px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LineBreak = styled.hr`
  height: 21px;
  box-sizing: border-box;
  border: 1px solid ${colors.white_ffffff};
  opacity: ${opacity.opacity0_37};
   margin=0;
`;
const NavbarContainer = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  margin-top: 77px;
`;
const NameLabel = styled(Label)`
  width: 119px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size31};
  line-height: ${sizes.size42};
  margin: 0px;
  ${queries.tablet} {
    font-size: ${sizes.size20};
    width: 100px;
  }
  ${queries.mobile} {
    font-size: ${sizes.size17};
    width: 70px;
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size17};
    width: 70px;
  }
`;
const EditLabel = styled(Label)`
  width: 30px;
  color: ${colors.orange_fda200};
  font-family: ${fontFamilies.fontFamilyOsMedium};
  line-height: ${sizes.size19};
  margin-left: 28px;
  margin-top: 20px;
  cursor: pointer;
  ${queries.tablet} {
    font-size: ${sizes.size18};
  }
  ${queries.mobile} {
    font-size: ${sizes.size15};
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size13};
  }
`;
const FullNameLabel = styled(Label)`
  width: 153px;
  color: ${colors.white_ffffff};
`;
const InfoLabel = styled(Label)`
  height: 22px;
  color: ${colors.white_ffffff};
  margin: 0;
  ${queries.tablet} {
    font-size: ${sizes.size12};
  }
  ${queries.mobile} {
    font-size: ${sizes.size11};
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size10};
  }
`;
const InfoCreditLabel = styled(Label)`
  height: 33px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size24};
  line-height: ${sizes.size33};
  margin-right: 10px;
  margin-left: 3px;
  ${queries.tablet} {
    font-size: ${sizes.size15};
  }
  ${queries.mobile} {
    font-size: ${sizes.size13};
  }
  ${queries.smallMobile} {
    font-size: ${sizes.size11};
  }
`;
const RoutingContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  background-color: ${colors.violet_f1f3fb};
`;
