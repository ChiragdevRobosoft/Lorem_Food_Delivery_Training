import profileBackground from "../../assets/profile/Bitmap.png";
import MobileIcon from "../../assets/profile/phone_icn.png";
import MailIcon from "../../assets/profile/mail_icn.png";
import InfoIcon from "../../assets/profile/icn_info_small.png";
import styled from "styled-components";
import Footer from "../common/footer";
import data from "../../components/common/constants.json";
import { sizes, colors, fontFamilies } from "../../variables";
import Label from "../common/label";
const Profile = () => {
  return (
    <Wrapper>
      <ProfileBanner>
        <CenterContainer>
          <UserProfile>
            <ProfilePhoto />
            <ProfileInfo>
              <NameLine>
                <Label
                  content={data.profile.name}
                  width="119px"
                  color={colors.white_ffffff}
                  fontFamily={fontFamilies.fontFamilyOsBold}
                  fontSize={sizes.size31}
                  letterSpacing="0"
                  lineHeight={sizes.size42}
                  margin="0px"
                />
                <Label
                  content={data.profile.edit}
                  width="30px"
                  color={colors.orange_fda200}
                  fontFamily={fontFamilies.fontFamilyOsMedium}
                  fontSize={sizes.size16}
                  letterSpacing="0"
                  lineHeight={sizes.size19}
                  marginLeft="28px"
                  marginTop="20px"
                />
              </NameLine>
              <Label
                content={data.profile.fullName}
                width="153px"
                color={colors.white_ffffff}
                fontFamily={fontFamilies.fontFamilyOsRegular}
                fontSize={sizes.size16}
                letterSpacing="0"
                lineHeight="22px"
                marginTop="11px"
              />
              <DetailsRow>
                <DetailContainer>
                  <Icon src={MobileIcon} />
                  <Label
                    content={data.profile.mobileNumber}
                    height="22px"
                    color={colors.white_ffffff}
                    fontFamily={fontFamilies.fontFamilyOsRegular}
                    fontSize={sizes.size16}
                    letterSpacing="0"
                    lineHeight={sizes.size22}
                    margin="0"
                  />
                </DetailContainer>
                <LineBreak />
                <DetailContainer>
                  <Icon src={MailIcon} />
                  <Label
                    content={data.profile.emailAddress}
                    height="22px"
                    color={colors.white_ffffff}
                    fontFamily={fontFamilies.fontFamilyOsRegular}
                    fontSize={sizes.size16}
                    letterSpacing="0"
                    lineHeight={sizes.size22}
                    margin="0"
                  />
                </DetailContainer>
                <LineBreak />
                <DetailContainer>
                  <Label
                    content={data.profile.creditEarned}
                    height="22px"
                    color={colors.white_ffffff}
                    fontFamily={fontFamilies.fontFamilyOsRegular}
                    fontSize={sizes.size16}
                    letterSpacing="0"
                    lineHeight={sizes.size22}
                    margin="0"
                  />
                  <Label
                    content={data.profile.creditData}
                    height="33px"
                    color={colors.white_ffffff}
                    fontFamily={fontFamilies.fontFamilyOsBold}
                    fontSize={sizes.size24}
                    letterSpacing="0"
                    lineHeight={sizes.size33}
                    marginRight="10px"
                    marginLeft="3px"
                  />
                  <Icon src={InfoIcon} />
                </DetailContainer>
              </DetailsRow>
            </ProfileInfo>
          </UserProfile>
          <Navbar>
            <Label
              content={data.profile.order + data.orderNumber}
              height="19px"
              color={colors.white_ffffff}
              font-family={fontFamilies.fontFamilyOsSemiBold}
              font-size={sizes.size14}
              letterSpacing="0"
              lineHeight={sizes.size19}
              marginRight="38px"
            />
            <Label
              content={data.profile.address}
              height="19px"
              color={colors.white_ffffff}
              font-family={fontFamilies.fontFamilyOsSemiBold}
              font-size={sizes.size14}
              letterSpacing="0"
              lineHeight={sizes.size19}
              marginRight="59px"
            />
            <Label
              content={data.profile.paymentMethods}
              height="19px"
              color={colors.white_ffffff}
              font-family={fontFamilies.fontFamilyOsSemiBold}
              font-size={sizes.size14}
              letterSpacing="0"
              lineHeight={sizes.size19}
              marginRight="58px"
            />
            <Label
              content={data.profile.reviews}
              height="19px"
              color={colors.white_ffffff}
              font-family={fontFamilies.fontFamilyOsSemiBold}
              font-size={sizes.size14}
              letterSpacing="0"
              lineHeight={sizes.size19}
              marginRight="58px"
            />
            <Label
              content={data.profile.gallery}
              height="19px"
              color={colors.white_ffffff}
              font-family={fontFamilies.fontFamilyOsSemiBold}
              font-size={sizes.size14}
              letterSpacing="0"
              lineHeight={sizes.size19}
            />
          </Navbar>
        </CenterContainer>
      </ProfileBanner>
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
`;
const UserProfile = styled.div`
  height: 113px;
  width: 814.5px;
  display: flex;
  flex-direction: row;
`;
const ProfilePhoto = styled.div`
  height: 106px;
  width: 106px;
  border: 3px solid ${colors.white_ffffff};
  box-shadow: 0 2px 3px 0 ${colors.black_000000_03};
  border-radius: 100px;
`;
const ProfileInfo = styled.div`
  text-align: left;
  margin-left: 58px;
`;
const NameLine = styled.div`
  display: flex;
  flex-direction: row;
`;
const DetailsRow = styled.div`
  width: 653px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  margin-top: 16px;
`;
const Icon = styled.img`
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
  opacity: 0.37;
  margin=0;
`;
const Navbar = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  margin-top: 77px;
`;
const Border = styled.img`
  height: ${sizes.size4};
  width: ${sizes.size38};
  margin-top: 50px;
`;
