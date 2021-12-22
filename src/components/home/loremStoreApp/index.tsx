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
    <Wrapper>
      <img className="left-bottom" src={leftBottom} alt="left-bottom" />
      <div className="marketing-info-holder">
        <p className="app-name">{data.homeTexts.loremStoreApp.heading}</p>
        <p className="download-text">
          {data.homeTexts.loremStoreApp.subHeading}
        </p>
        <p className="app-description">
          {data.homeTexts.loremStoreApp.description}
        </p>
        <div className="store-app-container">
          <a className="app-store" href="" />
          <a className="play-store" href="" />
        </div>
      </div>
      <img className="center-phone" src={centerPhone} alt="center-phone" />
      <img className="top-right" src={topRight} alt="top-right" />
    </Wrapper>
  );
};
export default LoremStoreApp;

const Wrapper = styled.div`
  position: relative;
  top: ${sizes.size0};
  left: ${sizes.size0};
  flex-direction: row;
  background: linear-gradient(
    ${angles.angle206_72},
    ${colors.lightblue1} 0%,
    ${colors.white} 100%
  );

  .left-bottom {
    height: ${sizes.size473};
    width: ${sizes.size548};
    position: absolute;
    bottom: ${sizes.size0};
    left: ${sizes.size0};
    //margin: 372px 0px 0.64px 0px; /* right 1372px */
  }
  .top-right {
    height: ${sizes.size735};
    width: ${sizes.size761};
    z-index: ${zIndex.index1};
    position: absolute;
    top: ${sizes.size0};
    right: ${sizes.size0};
    left: ${sizes.size1154};
    bottom: ${sizes.size102};
    //margin: 0 0 92 -250; //-250
    //border: 1px solid red;
  }
  .center-phone {
    height: ${sizes.size662};
    width: ${sizes.size450}; //327px;
    position: relative;
    z-index: ${zIndex.index2};
    top: ${sizes.size93};
    left: ${sizes.size967}; //1089px;
    right: ${sizes.size504};
    //margin: 93px 0px 92px 0px; //541
    //border: 1px solid red;
    //padding: 0px;
  }

  .marketing-info-holder {
    margin: ${sizes.size140} ${sizes.size1030} ${sizes.size423} ${sizes.size480};
    position: absolute;
    z-index: ${zIndex.index3};
    width: ${sizes.size410};
    height: ${sizes.size284};

    .app-name {
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
    }
    .download-text {
      margin: ${sizes.size0} ${sizes.size63} ${sizes.size18} ${sizes.size0};
      height: ${sizes.size41};
      width: ${sizes.size347};
      color: ${colors.grey8};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size30};
      letter-spacing: 0;
      line-height: ${sizes.size63};
      font-weight: ${fontWeight.weight600};
    }
    .app-description {
      margin: ${sizes.size0} ${sizes.size59} ${sizes.size43} ${sizes.size0};
      height: ${sizes.size44};
      width: ${sizes.size349};
      color: ${colors.grey7};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size16};
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size22};
    }
    .store-app-container {
      height: ${sizes.size55};
      width: ${sizes.size410};
      margin: ${sizes.size0} ${sizes.size0};
      display: flex;
      .app-store {
        width: ${sizes.size195};
        height: ${sizes.size55};
        background: url(${appStoreButton});
        background-repeat: no-repeat;
        background-position: center;
        margin-right: ${sizes.size20};
      }
      .play-store {
        width: ${sizes.size195};
        height: ${sizes.size55};
        background: url(${playStoreButton});
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;
