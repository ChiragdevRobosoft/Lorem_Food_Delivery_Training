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
  sizes,
  zIndex,
} from "../../../variables";
import { queries } from "../../common/breakpoints";
import Label from "../../common/label";

const LoremStoreApp = () => {
  return (
    <PageWrapper>
      <LeftBottom src={leftBottom} alt="left-bottom" />
      <MarketInfo>
        <AppName content={data.homeTexts.loremStoreApp.heading} />
        <DownloadText content={data.homeTexts.loremStoreApp.subHeading} />
        <AppDesc content={data.homeTexts.loremStoreApp.description} />
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
  width: 100wh;
  min-height: 847px;
  margin: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background: linear-gradient(
    ${angles.angle206_72},
    ${colors.blue_f3f6ff} 0%,
    ${colors.white_ffffff} 100%
  );
`;

const LeftBottom = styled.img`
  height: 473px;
  width: 548px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  ${queries.tabletLandscape} {
    height: 378px;
    width: 438px;
  }
  ${queries.tablet} {
    height: 284px;
    width: 330px;
  }
  ${queries.mobile} {
    height: 142px;
    width: 165px;
  }
`;

const MarketInfo = styled.div`
  margin: 8% auto auto 25%;
  position: absolute;
  z-index: ${zIndex.index3};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${queries.desktopMd} {
    margin: 8% auto auto 0;
  }
  ${queries.tabletLandscape} {
  }
  ${queries.tablet} {
  }
`;

const AppName = styled(Label)`
  margin: 0 auto 0 0;
  height: 63px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size50};
  letter-spacing: 0;
  line-height: ${sizes.size63};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  ${queries.desktopMd} {
    height: 56px;
    line-height: 56px;
    font-size: 44px;
  }
  ${queries.tabletLandscape} {
    height: 45px;
    line-height: 45px;
    font-size: 36;
  }
  ${queries.tablet} {
    height: 34px;
    line-height: 34px;
    font-size: 27px;
  }
`;

const DownloadText = styled(Label)`
  margin: 0 auto 18px 0;
  height: 41px;
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size30};
  letter-spacing: 0;
  line-height: 41px;
  ${queries.desktopMd} {
    height: 36px;
    line-height: 36px;
    font-size: 27px;
  }
  ${queries.tabletLandscape} {
    height: 29px;
    line-height: 29px;
    font-size: 25px;
  }
  ${queries.tablet} {
    height: 22px;
    line-height: 22px;
    font-size: 19px;
  }
`;

const AppDesc = styled(Label)`
  margin: 0 59px 43px 0;
  height: 44px;
  width: 349px;
  color: ${colors.grey_7c7c7c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  flex-wrap: wrap;
`;

const Stores = styled.div`
  height: 55px;
  width: 410px;
  margin: 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  height: 662px;
  width: 450px;
  position: relative;
  z-index: ${zIndex.index2};
  top: 93px;
  left: 52%;
  ${queries.desktopMd} {
    height: 588px;
    width: 400px;
    left: 60%;
  }
  ${queries.tabletLandscape} {
    height: 530px;
    width: 360px;
    left: 60%;
  }
  ${queries.tablet} {
    height: 398px;
    width: 271px;
    left: 60%;
  }
`;

const TopRight = styled.img`
  height: 735px;
  width: 761px;
  z-index: ${zIndex.index1};
  position: absolute;
  top: 0;
  right: 0;
  ${queries.desktopWide} {
    height: 694px;
    width: 718px;
  }
  ${queries.desktopMd} {
    height: 653px;
    width: 676px;
  }
  ${queries.tabletLandscape} {
    height: 588px;
    width: 609px;
  }
  ${queries.tablet} {
    height: 442px;
    width: 458px;
  }
`;
