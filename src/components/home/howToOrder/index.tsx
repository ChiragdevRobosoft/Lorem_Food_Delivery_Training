import styled from "styled-components";
import data from "./../../common/constants.json";
import firstStep from "./../../../assets/home/howToOrder/icn_house.png";
import secondStep from "./../../../assets/home/howToOrder/icn_burger.png";
import thirdStep from "./../../../assets/home/howToOrder/icn_cart.png";
import pathOne from "./../../../assets/home/howToOrder/wave1.png";
import pathTwo from "./../../../assets/home/howToOrder/wave2.png";
import {
  colors,
  fontFamilies,
  letterSpacing,
  opacity,
  sizes,
} from "../../../variables";

const HowToOrder = () => {
  return (
    <Wrapper>
      <Content>
        <Title>{data.homeTexts.howToOrder.heading}</Title>
        <Discription>{data.homeTexts.howToOrder.description}</Discription>
      </Content>
      <StepsContainer>
        <Steps
          dMargin={`${sizes.size0} ${sizes.size0}`}
          height={`${sizes.size192}`}
          width={`${sizes.size224}`}
        >
          <Step
            src={firstStep}
            alt="first-step"
            height={`${sizes.size118}`}
            width={`${sizes.size97}`}
            iMargin={`${sizes.size0} auto ${sizes.size20} ${sizes.size64}`}
          />
          <StepDescp height={`${sizes.size54}`} width={`${sizes.size224}`}>
            {data.homeTexts.howToOrder.step1}
          </StepDescp>
        </Steps>
        <SineWave className="path-wave" src={pathOne} alt="pathOne" />
        <Steps
          height={`${sizes.size181}`}
          width={`${sizes.size228}`}
          marginTop={`${sizes.size11}`}
          marginLeft={`${sizes.sizen31_54}`}
        >
          <Step
            src={secondStep}
            alt="second-step"
            height={`${sizes.size107}`}
            width={`${sizes.size96}`}
            iMargin={`${sizes.size0} ${sizes.size66} ${sizes.size20} ${sizes.size66}`}
          />
          <StepDescp height={`${sizes.size54}`} width={`${sizes.size228}`}>
            {data.homeTexts.howToOrder.step2}
          </StepDescp>
        </Steps>
        <SineWave className="path-wave" src={pathTwo} alt="pathTwo" />
        <Steps
          height={`${sizes.size184}`}
          width={`${sizes.size242}`}
          marginTop={`${sizes.size8}`}
          marginLeft={`${sizes.sizen37_54}`}
        >
          <Step
            src={thirdStep}
            alt="third-step"
            height={`${sizes.size110}`}
            width={`${sizes.size93}`}
            iMargin={`${sizes.size0} ${sizes.size74} ${sizes.size20} ${sizes.size75}`}
          />
          <StepDescp height={`${sizes.size54}`} width={`${sizes.size242}`}>
            {data.homeTexts.howToOrder.step3}
          </StepDescp>
        </Steps>
      </StepsContainer>
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 121px;
  width: 643px;
  margin: 98px 823px 96px 420px;
`;
const Title = styled.p`
  margin: 0 324px 14px 0;
  height: 83px;
  width: 319px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size50};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size83};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
`;

const Discription = styled.p`
  margin: 0 0 0 4px;
  height: 24px;
  width: 639px;
  color: ${colors.grey_929598};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_58};
  line-height: ${sizes.size24};
`;

const StepsContainer = styled.div`
  margin: 0 572px 235px 421px;
  width: 893px;
  height: 192px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface StepsProps {
  height: string;
  width: string;
  dMargin?: string;
  marginTop?: string;
  marginLeft?: string;
}
const Steps = styled.div<StepsProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => (props.dMargin ? props.dMargin : "")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
`;

interface StepProps {
  height: string;
  width: string;
  iMargin: string;
}
const Step = styled.img<StepProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.iMargin};
`;

interface StepDescpProps {
  height: string;
  width: string;
}
const StepDescp = styled.p<StepDescpProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${colors.grey_7c7c7c};
  font-family: ${fontFamilies.fontFamilyOsRegular}
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_64};
  line-height: ${sizes.size27};
  text-align: center;
`;

const SineWave = styled.img`
  height: 24px;
  width: 162.54px;
  margin: 47px 0 121px -26px;
  opacity: ${opacity.opacity0_58};
`;
