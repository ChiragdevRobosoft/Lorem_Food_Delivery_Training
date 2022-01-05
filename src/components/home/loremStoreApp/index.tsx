import styled from "styled-components";
import data from "./../../common/constants.json";
import leftBottom from "./../../../assets/home/loremStoreApp/img_vegetables.png";
import centerPhone from "./../../../assets/home/loremStoreApp/img_phone.png";
import topRight from "./../../../assets/home/loremStoreApp/img_gradient_u.png";
import appStoreButton from "./../../../assets/home/loremStoreApp/Button - App Store.png";
import playStoreButton from "./../../../assets/home/loremStoreApp/Button - Play Store.png";
import {
  angles,
  colors,
  fontFamilies,
  fontWeight,
  sizes,
  zIndex,
} from "../../../variables";

const LoremStoreApp = () => {
  return (
    <PageWrapper>
      <LeftBottom src={leftBottom} alt="left-bottom" />
      <MarketInfo>
        <AppName>{data.homeTexts.loremStoreApp.heading}</AppName>
        <DownloadText>{data.homeTexts.loremStoreApp.subHeading}</DownloadText>
        <AppDesc>{data.homeTexts.loremStoreApp.description}</AppDesc>
        <Stores>
          <Store img={appStoreButton} marginR={`${sizes.size20}`} />
          <Store img={playStoreButton} />
        </Stores>
      </MarketInfo>
      <CenterPhone src={centerPhone} alt="center-phone" />
      <TopRight src={topRight} alt="top-right" />
    </PageWrapper>
  );
};
export default LoremStoreApp;

const PageWrapper = styled.div`
  position: relative;
  top: ${sizes.size0};
  left: ${sizes.size0};
  height: ${sizes.size847};
  margin: 0;
  flex-direction: row;
  background: linear-gradient(
    ${angles.angle206_72},
    ${colors.blue_f3f6ff} 0%,
    ${colors.white_ffffff} 100%
  );
`;

const LeftBottom = styled.img`
  height: ${sizes.size473};
  width: ${sizes.size548};
  margin: ${sizes.size372} auto ${sizes.size0} ${sizes.size0};
  position: absolute;
  bottom: ${sizes.size0};
  left: ${sizes.size0};
`;

const MarketInfo = styled.div`
  margin: ${sizes.size140} ${sizes.size1030} ${sizes.size423} ${sizes.size480};
  position: absolute;
  z-index: ${zIndex.index3};
  width: ${sizes.size410};
  height: ${sizes.size284};
`;

const AppName = styled.p`
  margin: ${sizes.size0} ${sizes.size152} ${sizes.size0} ${sizes.size0};
  height: ${sizes.size83};
  width: ${sizes.size258};
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size50};
  letter-spacing: 0;
  line-height: ${sizes.size63};
  text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
    ${colors.white_ffffff};
`;

const DownloadText = styled.p`
  margin: ${sizes.size0} ${sizes.size63} ${sizes.size18} ${sizes.size0};
  height: ${sizes.size41};
  width: ${sizes.size347};
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size30};
  letter-spacing: 0;
  line-height: ${sizes.size63};
  font-weight: ${fontWeight.weight600};
`;

const AppDesc = styled.p`
  margin: ${sizes.size0} ${sizes.size59} ${sizes.size43} ${sizes.size0};
  height: ${sizes.size44};
  width: ${sizes.size349};
  color: ${colors.grey_7c7c7c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
`;

const Stores = styled.div`
  height: ${sizes.size55};
  width: ${sizes.size410};
  margin: ${sizes.size0} ${sizes.size0};
  display: flex;
`;
interface StoreProps {
  img: string;
  marginR?: string;
}

const Store = styled.a<StoreProps>`
  width: ${sizes.size195};
  height: ${sizes.size55};
  background: ${(props) => (props.img ? `url(${props.img})` : "")};
  background-repeat: no-repeat;
  background-position: center;
  margin-right: ${(props) => (props.marginR ? props.marginR : "")}; ;
`;

const CenterPhone = styled.img`
  height: ${sizes.size662};
  width: ${sizes.size450};
  position: relative;
  z-index: ${zIndex.index2};
  top: ${sizes.size93};
  left: ${sizes.size967};
  right: ${sizes.size504};
`;

const TopRight = styled.img`
  height: ${sizes.size735};
  width: ${sizes.size761};
  z-index: ${zIndex.index1};
  position: absolute;
  top: ${sizes.size0};
  right: ${sizes.size0};
  left: ${sizes.size1154};
  bottom: ${sizes.size102};
`;
