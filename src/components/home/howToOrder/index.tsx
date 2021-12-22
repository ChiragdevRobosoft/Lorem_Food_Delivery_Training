import styled from "styled-components";
import data from "./../../common/constants.json";
import firstStep from "./../../../assets/home/howToOrder/icn_house.png";
import secondStep from "./../../../assets/home/howToOrder/icn_burger.png";
import thirdStep from "./../../../assets/home/howToOrder/icn_cart.png";
import pathOne from "./../../../assets/home/howToOrder/wave1.png";
import pathTwo from "./../../../assets/home/howToOrder/wave2.png";
import { colors, sizes } from "../../../variables";

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
  height: ${sizes.size742};
  width: ${sizes.size1886};
  margin: ${sizes.size37} ${sizes.size24} ${sizes.size1} ${sizes.size38};
  display: flex;
  flex-direction: column;
  .title-discrp-container {
    display: flex;
    flex-direction: column;
    height: ${sizes.size121};
    width: ${sizes.size643};
    margin: ${sizes.size98} ${sizes.size823} ${sizes.size96} ${sizes.size420};

    .content-title {
      margin: ${sizes.size0} ${sizes.size324} ${sizes.size14} ${sizes.size0};
      height: ${sizes.size83};
      width: ${sizes.size319};
      color: ${colors.grey5};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size50};
      letter-spacing: ${sizes.size0};
      line-height: ${sizes.size83};
      text-shadow: ${sizes.size0} ${sizes.size0} ${sizes.size9} ${sizes.size0}
        ${colors.white};
    }
    .content-discription {
      margin: ${sizes.size0} ${sizes.size0} ${sizes.size0} ${sizes.size4};
      height: ${sizes.size24};
      width: ${sizes.size639};
      color: ${colors.grey6};
      font-family: "Open Sans", sans-serif;
      font-size: ${sizes.size18};
      letter-spacing: ${sizes.size0_58};
      line-height: ${sizes.size24};
    }
  }
  .steps-container {
    margin: ${sizes.size0} ${sizes.size572} ${sizes.size235} ${sizes.size421};
    width: ${sizes.size893};
    height: ${sizes.size192};
    display: flex;
    flex-direction: row;
    align-items: center;

    .first-step {
      margin: ${sizes.size0} ${sizes.size0};
      height: ${sizes.size192};
      width: ${sizes.size224};

      img {
        height: ${sizes.size118};
        width: ${sizes.size97};
        margin: ${sizes.size0} auto ${sizes.size20} ${sizes.size64};
      }
      p {
        height: ${sizes.size54};
        width: ${sizes.size224};
        color: ${colors.grey7};
        font-family: "Open Sans", sans-serif;
        font-size: ${sizes.size18};
        letter-spacing: ${sizes.size0_64};
        line-height: ${sizes.size27};
        text-align: center;
      }
    }

    .second-step {
      height: ${sizes.size181};
      width: ${sizes.size228};
      margin-top: ${sizes.size11};
      margin-left: ${sizes.sizen31_54};

      img {
        height: ${sizes.size107};
        width: ${sizes.size96};
        margin: ${sizes.size0} ${sizes.size66} ${sizes.size20} ${sizes.size66};
      }
      p {
        height: ${sizes.size54};
        width: ${sizes.size228};
        color: ${colors.grey7};
        font-family: "Open Sans", sans-serif;
        font-size: ${sizes.size18};
        letter-spacing: ${sizes.size0_64};
        line-height: ${sizes.size27};
        text-align: center;
      }
    }
    .third-step {
      height: ${sizes.size184};
      width: ${sizes.size242};
      margin-top: ${sizes.size8};
      margin-left: ${sizes.sizen37_54};
      //border: 1px solid red;
      img {
        height: ${sizes.size110};
        width: ${sizes.size93};
        margin: ${sizes.size0} ${sizes.size74} ${sizes.size20} ${sizes.size75};
      }
      p {
        height: ${sizes.size54};
        width: ${sizes.size242};
        color: ${colors.grey7};
        font-family: "Open Sans", sans-serif;
        font-size: ${sizes.size18};
        letter-spacing: ${sizes.size0_64};
        line-height: ${sizes.size27};
        text-align: center;
      }
    }
    .path-wave {
      height: ${sizes.size24};
      width: ${sizes.size162_54};
      margin: ${sizes.size47} ${sizes.size0} ${sizes.size121} ${sizes.sizen26};
      opacity: ${sizes.size0_58};
    }
  }
`;
