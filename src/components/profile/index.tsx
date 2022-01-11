import profileBackground from "../../assets/profile/Bitmap.png";
import MobileIcon from "../../assets/profile/phone_icn.png";
import MailIcon from "../../assets/profile/mail_icn.png";
import InfoIcon from "../../assets/profile/icn_info_small.png";
import Underline from "../../assets/underline.png";
import styled from "styled-components";
import Footer from "../common/footer";
import data from "../../components/common/constants.json";
import { sizes, colors, fontFamilies } from "../../variables";
const Profile = () => {
  let orderNumber = 2;
  return (
    <Wrapper>
      <ProfileBanner>
        <CenterContainer>
          <UserProfile>
            <ProfilePhoto />
            <ProfileInfo>
              <NameLine>
                <Name>{data.profile.name}</Name>
                <Edit>{data.profile.edit}</Edit>
              </NameLine>
              <FullName>{data.profile.fullName}</FullName>
              <DetailsRow>
                <DetailContainer>
                  <Icon src={MobileIcon} />
                  <DetailText>{data.profile.mobileNumber}</DetailText>
                </DetailContainer>
                <LineBreak />
                <DetailContainer>
                  <Icon src={MailIcon} />
                  <DetailText>{data.profile.emailAddress}</DetailText>
                </DetailContainer>
                <LineBreak />
                <DetailContainer>
                  <DetailText>{data.profile.creditEarned}</DetailText>
                  <CreditData>{data.profile.creditData}</CreditData>
                  <Icon src={InfoIcon} />
                </DetailContainer>
              </DetailsRow>
            </ProfileInfo>
          </UserProfile>
          <Navbar>
            <Orders>
              {data.profile.order} ({orderNumber})
            </Orders>
            <Address>{data.profile.address}</Address>
            <PaymentMethods>{data.profile.paymentMethods}</PaymentMethods>
            <Reviews>{data.profile.reviews}</Reviews>
            <Gallery>{data.profile.gallery}</Gallery>
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
const Name = styled.p`
  width: 119px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size31};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${sizes.size42};
  margin: 0px;
`;
const NameLine = styled.div`
  display: flex;
  flex-direction: row;
`;
const Edit = styled.p`
  width: 30px;
  color: ${colors.orange_fda200};
  font-family: ${fontFamilies.fontFamilyOsMedium};
  font-size: ${sizes.size16};
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${sizes.size19};
  text-align: right;
  margin-left: 28px;
`;
const FullName = styled.p`
  width: 153px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: 0;
  line-height: 22px;
  margin-top: 3px;
`;
const DetailsRow = styled.div`
  width: 653px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 33px;
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
`;
const CreditData = styled.p`
  height: 33px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size24};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${sizes.size33};
  margin-right: 10px;
  margin-left: 3px;
`;
const DetailText = styled.p`
  height: 22px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: 0;
  line-height: ${sizes.size22};
`;
const Navbar = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;
const Orders = styled.p`
  height: 19px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${sizes.size19};
  margin-right: 38px;
`;
const Address = styled.p`
  height: 19px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${sizes.size19};
  margin-right: 59px;
`;
const PaymentMethods = styled.p`
  height: 19px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${sizes.size19};
  margin-right: 58px;
`;
const Reviews = styled.p`
  height: 19px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${sizes.size19};
  margin-right: 58px;
`;
const Gallery = styled.p`
  height: 19px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${sizes.size19};
`;
const Border = styled.img`
  height: ${sizes.size4};
  width: ${sizes.size38};
  margin-top: 50px;
`;
