import styled from "styled-components";
import data from "./../../common/constants.json";
import leftBottom from "./../../../assets/home/loremStoreApp/img_vegetables.png";
import centerPhone from "./../../../assets/home/loremStoreApp/img_phone.png";
import topRight from "./../../../assets/home/loremStoreApp/img_gradient_u.png";
import appStoreButton from "./../../../assets/home/loremStoreApp/Button - App Store.png";
import playStoreButton from "./../../../assets/home/loremStoreApp/Button - Play Store.png";

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
  top: 0px;
  left: 0px;
  flex-direction: row;
  background: linear-gradient(206.72deg, #f3f6ff 0%, #ffffff 100%);

  .left-bottom {
    height: 473px;
    width: 548px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    //margin: 372px 0px 0.64px 0px; /* right 1372px */
    //border: 1px solid red;
  }
  .top-right {
    height: 735px;
    width: 761px;
    z-index: 1;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 1154;
    bottom: 102px;
    //margin: 0 0 92px -250px; //-250
    //border: 1px solid red;
  }
  .center-phone {
    height: 662px;
    width: 450px; //327px;
    position: relative;
    z-index: 2;
    top: 93px;
    left: 967px; //1089px;
    right: 504px;
    //margin: 93px 0px 92px 0px; //541
    //border: 1px solid red;
    //padding: 0px;
  }

  .marketing-info-holder {
    margin: 140px 1030px 423px 480px;
    position: absolute;
    z-index: 3;
    width: 410px;
    height: 284px;

    .app-name {
      margin: 0 152px 0 0;
      height: 83px;
      width: 258px;
      color: #4c4c4c;
      font-family: "Open Sans", sans-serif;
      font-size: 50px;
      letter-spacing: 0;
      line-height: 63px;
      text-shadow: 0 0 9px 0 #ffffff;
    }
    .download-text {
      margin: 0 63px 18px 0;
      height: 41px;
      width: 347px;
      color: #303134;
      font-family: "Open Sans", sans-serif;
      font-size: 30px;
      letter-spacing: 0;
      line-height: 63px;
      font-weight: 600;
    }
    .app-description {
      margin: 0 59px 43px 0;
      height: 44px;
      width: 349px;
      color: #7c7c7c;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 22px;
    }
    .store-app-container {
      height: 55px;
      width: 410px;
      margin: 0 0;
      display: flex;
      .app-store {
        width: 195px;
        height: 55px;
        background: url(${appStoreButton});
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 20px;
      }
      .play-store {
        width: 195px;
        height: 55px;
        background: url(${playStoreButton});
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;
