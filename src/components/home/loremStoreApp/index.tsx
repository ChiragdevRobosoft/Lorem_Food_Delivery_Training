import styled from "styled-components";
import data from "./../../common/constants.json";
import leftBottom from "./../../../assets/home/loremStoreApp/img_vegetables.png";
import centerPhone from "./../../../assets/home/loremStoreApp/img_phone.png";
import topRight from "./../../../assets/home/loremStoreApp/img_gradient_u.png";
import appStoreButton from "./../../../assets/home/loremStoreApp/Button - App Store.png";
import playStoreButton from "./../../../assets/home/loremStoreApp/Button - Play Store.png";
import { angles, colors, fontWeight, sizes, zIndex } from "../../../variables";

const LoremStoreApp = () => {
  return (
    <PageWrapper>
      <LeftBottom src={leftBottom} alt="left-bottom" />
      <MarketInfo>
        <AppName>{data.homeTexts.loremStoreApp.heading}</AppName>
        <DownloadText>{data.homeTexts.loremStoreApp.subHeading}</DownloadText>
        <AppDesc>{data.homeTexts.loremStoreApp.description}</AppDesc>
        <StoresDiv>
          <StoreButton img={appStoreButton} marginR={`${sizes.size20}`} />
          <StoreButton img={playStoreButton} />
        </StoresDiv>
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
  flex-direction: row;
  background: linear-gradient(
    ${angles.angle206_72},
    ${colors.lightblue1} 0%,
    ${colors.white} 100%
  );
`;

const LeftBottom = styled.img`
  height: ${sizes.size473};
  width: ${sizes.size548};
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
  color: ${colors.grey5};
  font-family: "Open Sans", sans-serif;
  font-size: ${sizes.size50};
  letter-spacing: 0;
  line-height: ${sizes.size63};
  text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
    ${colors.white};
`;

const DownloadText = styled.p`
  margin: ${sizes.size0} ${sizes.size63} ${sizes.size18} ${sizes.size0};
  height: ${sizes.size41};
  width: ${sizes.size347};
  color: ${colors.grey8};
  font-family: "Open Sans", sans-serif;
  font-size: ${sizes.size30};
  letter-spacing: 0;
  line-height: ${sizes.size63};
  font-weight: ${fontWeight.weight600};
`;

const AppDesc = styled.p`
  margin: ${sizes.size0} ${sizes.size59} ${sizes.size43} ${sizes.size0};
  height: ${sizes.size44};
  width: ${sizes.size349};
  color: ${colors.grey7};
  font-family: "Open Sans", sans-serif;
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
`;

const StoresDiv = styled.div`
  height: ${sizes.size55};
  width: ${sizes.size410};
  margin: ${sizes.size0} ${sizes.size0};
  display: flex;
`;
interface StoreButtonProps {
  img: string;
  marginR?: string;
}

const StoreButton = styled.a<StoreButtonProps>`
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
