import styled from "styled-components";
import data from "./../../common/constants.json";
import firstStep from "./../../../assets/home/howToOrder/icn_house.png";
import secondStep from "./../../../assets/home/howToOrder/icn_burger.png";
import thirdStep from "./../../../assets/home/howToOrder/icn_cart.png";
import pathOne from "./../../../assets/home/howToOrder/wave1.png";
import pathTwo from "./../../../assets/home/howToOrder/wave2.png";

const HowToOrder = () => {
  return (
    <Wrapper>
      <div className="title-discrp-container">
        <p className="content-title">{data.homeTexts.howToOrder.heading}</p>
        <p className="content-discription">
          {data.homeTexts.howToOrder.description}
        </p>
      </div>
      <div className="steps-container">
        <div className="first-step">
          <img className="first-step-img" src={firstStep} alt="first-step" />
          <p>{data.homeTexts.howToOrder.step1}</p>
        </div>
        <img className="path-wave" src={pathOne} alt="pathOne" />
        <div className="second-step">
          <img src={secondStep} alt="second-step" />
          <p>{data.homeTexts.howToOrder.step2}</p>
        </div>
        <img className="path-wave" src={pathTwo} alt="pathTwo" />
        <div className="third-step">
          <img src={thirdStep} alt="third-step" />
          <p>{data.homeTexts.howToOrder.step3}</p>
        </div>
      </div>
    </Wrapper>
  );
};
export default HowToOrder;

const Wrapper = styled.div`
  height: 742px;
  width: 1886px;
  margin: 37px 24px 1px 38px;
  display: flex;
  flex-direction: column;
  .title-discrp-container {
    display: flex;
    flex-direction: column;
    height: 121px;
    width: 643px;
    margin: 98px 823px 96px 420px;

    .content-title {
      margin: 0 324px 14px 0;
      height: 83px;
      width: 319px;
      color: #4c4c4c;
      font-family: "Open Sans", sans-serif;
      font-size: 50px;
      letter-spacing: 0;
      line-height: 83px;
      text-shadow: 0 0 9px 0 #ffff;
    }
    .content-discription {
      margin: 0 0 0 4px;
      height: 24px;
      width: 639px;
      color: #929598;
      font-family: "Open Sans", sans-serif;
      font-size: 18px;
      letter-spacing: 0.58;
      line-height: 24px;
    }
  }
  .steps-container {
    margin: 0 572px 235px 421px;
    width: 893px;
    height: 192px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .first-step {
      margin: 0px 0px;
      height: 192px;
      width: 224px;

      img {
        height: 118px;
        width: 97px;
        margin: 0 auto 20px 64px;
      }
      p {
        height: 54px;
        width: 224px;
        color: #7c7c7c;
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        letter-spacing: 0.64;
        line-height: 27px;
        text-align: center;
      }
    }

    .second-step {
      height: 181px;
      width: 228px;
      margin-top: 11px;
      margin-left: -31.54px;

      img {
        height: 107px;
        width: 96px;
        margin: 0 66px 20px 66px;
      }
      p {
        height: 54px;
        width: 228px;
        color: #7c7c7c;
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        letter-spacing: 0.64;
        line-height: 27px;
        text-align: center;
      }
    }
    .third-step {
      height: 184px;
      width: 242px;
      margin-top: 8px;
      margin-left: -37.54px;
      //border: 1px solid red;
      img {
        height: 110px;
        width: 93px;
        margin: 0 74px 20px 75px;
      }
      p {
        height: 54px;
        width: 242px;
        color: #7c7c7c;
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        letter-spacing: 0.64;
        line-height: 27px;
        text-align: center;
      }
    }
    .path-wave {
      height: 24px;
      width: 162.54px;
      margin: 47px 0 121px -26px;
      opacity: 0.58;
    }
  }
`;
