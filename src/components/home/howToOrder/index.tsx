import styled from "styled-components";
import data from "./../../common/constants.json";
import firstStep from "./../../../assets/home/howToOrder/icn_house.png";
import secondStep from "./../../../assets/home/howToOrder/icn_burger.png";
import thirdStep from "./../../../assets/home/howToOrder/icn_cart.png";
import pathOne from "./../../../assets/home/howToOrder/wave1.png";
import pathTwo from "./../../../assets/home/howToOrder/wave2.png";
import { colors, fontFamilies, sizes } from "../../../variables";

const HowToOrder = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <ContentTitle>{data.homeTexts.howToOrder.heading}</ContentTitle>
        <ContentDiscrip>{data.homeTexts.howToOrder.description}</ContentDiscrip>
      </ContentDiv>
      <StepsContainer>
        <StepDiv
          dMargin={`${sizes.size0} ${sizes.size0}`}
          height={`${sizes.size192}`}
          width={`${sizes.size224}`}
        >
          <StepImage
            src={firstStep}
            alt="first-step"
            height={`${sizes.size118}`}
            width={`${sizes.size97}`}
            iMargin={`${sizes.size0} auto ${sizes.size20} ${sizes.size64}`}
          />
          <StepText height={`${sizes.size54}`} width={`${sizes.size224}`}>
            {data.homeTexts.howToOrder.step1}
          </StepText>
        </StepDiv>
        <SineWave className="path-wave" src={pathOne} alt="pathOne" />
        <StepDiv
          height={`${sizes.size181}`}
          width={`${sizes.size228}`}
          marginTop={`${sizes.size11}`}
        >
          <StepImage
            src={secondStep}
            alt="second-step"
            height={`${sizes.size107}`}
            width={`${sizes.size96}`}
            iMargin={`${sizes.size0} ${sizes.size66} ${sizes.size20} ${sizes.size66}`}
          />
          <StepText height={`${sizes.size54}`} width={`${sizes.size228}`}>
            {data.homeTexts.howToOrder.step2}
          </StepText>
        </StepDiv>
        <SineWave className="path-wave" src={pathTwo} alt="pathTwo" />
        <StepDiv
          height={`${sizes.size184}`}
          width={`${sizes.size242}`}
          marginTop={`${sizes.size8}`}
          marginLeft={`${sizes.sizen37_54}`}
        >
          <StepImage
            src={thirdStep}
            alt="third-step"
            height={`${sizes.size110}`}
            width={`${sizes.size93}`}
            iMargin={`${sizes.size0} ${sizes.size74} ${sizes.size20} ${sizes.size75}`}
          />
          <StepText height={`${sizes.size54}`} width={`${sizes.size242}`}>
            {data.homeTexts.howToOrder.step3}
          </StepText>
        </StepDiv>
      </StepsContainer>
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
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: ${sizes.size121};
  width: ${sizes.size643};
  margin: ${sizes.size98} ${sizes.size823} ${sizes.size96} ${sizes.size420};
`;
const ContentTitle = styled.p`
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
`;
const ContentDiscrip = styled.p`
  margin: ${sizes.size0} ${sizes.size0} ${sizes.size0} ${sizes.size4};
  height: ${sizes.size24};
  width: ${sizes.size639};
  color: ${colors.grey6};
  font-family: "Open Sans", sans-serif;
  font-size: ${sizes.size18};
  letter-spacing: ${sizes.size0_58};
  line-height: ${sizes.size24};
`;
const StepsContainer = styled.div`
  margin: ${sizes.size0} ${sizes.size572} ${sizes.size235} ${sizes.size421};
  width: ${sizes.size893};
  height: ${sizes.size192};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface StepDivProps {
  height: string;
  width: string;
  dMargin?: string;
  marginTop?: string;
  marginLeft?: string;
}
const StepDiv = styled.div<StepDivProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => (props.dMargin ? props.dMargin : "")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
`;

interface StepImageProps {
  height: string;
  width: string;
  iMargin: string;
}
const StepImage = styled.img<StepImageProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.iMargin};
`;

interface StepTextProps {
  height: string;
  width: string;
}
const StepText = styled.p<StepTextProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${colors.grey7};
  font-family: ${fontFamilies.fontFamilyOsRegular}
  font-size: ${sizes.size18};
  letter-spacing: ${sizes.size0_64};
  line-height: ${sizes.size27};
  text-align: center;
`;

const SineWave = styled.img`
  height: ${sizes.size24};
  width: ${sizes.size162_54};
  margin: ${sizes.size47} ${sizes.size0} ${sizes.size121} ${sizes.sizen26};
  opacity: ${sizes.size0_58};
`;
