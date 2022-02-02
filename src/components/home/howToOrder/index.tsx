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
import { queries } from "../../common/breakpoints";

const HowToOrder = () => {
  return (
    <Wrapper>
      <Container>
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
              iMargin={`${sizes.size0} auto ${sizes.size20} auto`}
            />
            <StepDescp height={`${sizes.size54}`}>
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
              iMargin={`${sizes.size0} auto ${sizes.size20} auto`}
            />
            <StepDescp height={`${sizes.size54}`}>
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
              iMargin={`${sizes.size0} auto ${sizes.size20} auto`}
            />
            <StepDescp height={`${sizes.size54}`}>
              {data.homeTexts.howToOrder.step3}
            </StepDescp>
          </Steps>
        </StepsContainer>
      </Container>
    </Wrapper>
  );
};
export default HowToOrder;

const Wrapper = styled.div`
  height: 742px;
  width: 100%;
  margin: 37px 24px 1px 38px;
  display: flex;
`;

const Container = styled.div`
  width: 52%;
  margin: 98px 25% auto 23%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${queries.desktopMd} {
    width: 59%;
    margin: 87px 21% auto 20%;
  }
  ${queries.tabletLandscape} {
    width: 73%;
    margin: 70px 18% auto 9%;
  }
  ${queries.tablet} {
    width: 97%;
    margin: 52px 10% auto 3%;
  }
  ${queries.mobile} {
    width: 100%;
    margin: 26px 0 auto 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 96px 0;
  ${queries.tabletLandscape} {
    margin: 0 auto 70px 0;
  }
  ${queries.tablet} {
    margin: 0 auto 50px 0;
  }
`;

const Title = styled.p`
  margin: 0 auto 14px 0;
  height: 83px;
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size50};
  letter-spacing: ${letterSpacing.space0};
  line-height: ${sizes.size83};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  ${queries.tabletLandscape} {
    height: 66px;
    line-height: 66px;
    font-size: 40px;
    margin: 0 auto 11px 0;
  }
  ${queries.tablet} {
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    margin: 0 auto 8px 0;
  }
  ${queries.mobile} {
    height: 25px;
    line-height: 25px;
    font-size: 15px;
    margin: 0 auto 4px 0px;
  }
`;

const Discription = styled.p`
  margin: 0 auto 0 4px;
  height: 24px;
  color: ${colors.grey_929598};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_58};
  line-height: ${sizes.size24};
  ${queries.desktopMd} {
    height: 21px;
    line-height: 21px;
    font-size: 16px;
    margin: 0 auto 0 3.5px;
  }
  ${queries.tabletLandscape} {
    height: 19px;
    line-height: 19px;
    font-size: 14px;
    margin: 0 auto 0 3px;
  }
  ${queries.tablet} {
    height: 14px;
    line-height: 14px;
    font-size: 11px;
    margin: 0 auto 0 2px;
  }
  ${queries.mobile} {
    height: 7px;
    line-height: 7px;
    font-size: 5.5px;
    margin: 0 auto 0 1px;
  }
`;

const StepsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => (props.dMargin ? props.dMargin : "")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
  ${queries.tabletLandscape} {
    height: ${(props) => parseInt(props.height) / 1.25}px;
    width: ${(props) => parseInt(props.width) / 1.33}px;
  }
  ${queries.tablet} {
    height: ${(props) => parseInt(props.height) / 1.25}px;
    width: ${(props) => parseInt(props.width) / 1.33}px;
  }
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
  ${queries.tabletLandscape} {
    height: ${(props) => parseInt(props.height) / 1.25}px;
    width: ${(props) => parseInt(props.width) / 1.25}px;
  }
  ${queries.tablet} {
    height: ${(props) => parseInt(props.height) / 1.3}px;
    width: ${(props) => parseInt(props.width) / 1.33}px;
  }
  ${queries.tablet} {
    height: ${(props) => parseInt(props.height) / 2}px;
    width: ${(props) => parseInt(props.width) / 2}px;
  }
`;

interface StepDescpProps {
  height: string;
}
const StepDescp = styled.p<StepDescpProps>`
  height: ${(props) => props.height};
  color: ${colors.grey_7c7c7c};
  font-family: ${fontFamilies.fontFamilyOsRegular}
  font-size: ${sizes.size18};
  letter-spacing: ${letterSpacing.space0_64};
  line-height: ${sizes.size27};
  text-align: center;
  ${queries.tabletLandscape} {
    height: ${(props) => parseInt(props.height) / 1.25}px;
    font-size: 14px;
  line-height: 22px;
  }
  ${queries.tablet} {
    height: ${(props) => parseInt(props.height) / 1.33}px;
    font-size: 11px;
  line-height: 16px;
  }
  ${queries.mobile} {
    height: ${(props) => parseInt(props.height) / 2}px;
    font-size: 5.5;
  line-height: 8px;
  }
`;

const SineWave = styled.img`
  height: 24px;
  width: 162.54px;
  margin: 47px 0 121px -26px;
  opacity: ${opacity.opacity0_58};
  ${queries.tabletLandscape} {
    height: 19px;
    width: 130px;
    margin: 38px 0 97px -21px;
  }
  ${queries.tablet} {
    height: 14px;
    width: 98px;
    margin: 28px 0 73px -16px;
  }
  ${queries.mobile} {
    height: 7px;
    width: 49px;
    margin: 14px 0 36px -8px;
  }
`;
