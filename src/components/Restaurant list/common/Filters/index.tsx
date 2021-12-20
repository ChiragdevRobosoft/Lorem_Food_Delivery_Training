import React from "react";
import styled from "styled-components";
import FilterMinus from "../../../../assets/restaurantList/filter_minus.png";
import FilterCheckbox from "../../../../assets/restaurantList/filter_checkbox.png";
import Radio from "../Radio button";
import FilterPlus from "../../../../assets/restaurantList/filter_plus.png";
import data from "../../../common/constants.json";
import { fontFamilies, colors, sizes, angles } from "../../../../variables";

const Filters = () => {
  return (
    <Wrapper>
      <TopFlex>
        <Title>Filters</Title>
        <Reset>Reset all</Reset>
      </TopFlex>
      <MiddleFlex>
        <AppliedFilter className="time">TIME</AppliedFilter>
        <AppliedFilter className="cost">&amp; AVERAGE MEAL COST</AppliedFilter>
        <AppliedFilterImage src={FilterMinus} />
      </MiddleFlex>
      <RadioTitle>Show restaurant with</RadioTitle>
      <CheckboxWrapper>
        <Input type="checkbox" id="Open" name="Open" value="Open Now" />
        <Label htmlFor="Open">Open Now</Label>
      </CheckboxWrapper>
      {data.radio.map((radioInfo, index) => {
        return (
          <>
            <RadioTitle className="radio">{radioInfo.name}</RadioTitle>
            <Radio name={radioInfo.name} options={radioInfo.options} />
          </>
        );
      })}
      <EndFlex>
        <Cuisines className="cuisines">CUISINES</Cuisines>
        <AppliedFilterImage src={FilterPlus} className="plus" />
      </EndFlex>
      <Button>
        <span>APPLY</span>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${sizes.size672};
  width: ${sizes.size304};
  border-radius: ${sizes.size6};
  background-color: ${colors.white};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black1};
  margin: ${sizes.size10};
`;

const TopFlex = styled.div`
  height: ${sizes.size52};
  display: flex;
  flex-direction: row;
  border-bottom: ${sizes.size2} solid ${colors.white2};
`;

const Title = styled.div`
  height: ${sizes.size27};
  width: ${sizes.size60};
  color: ${colors.grey11};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size20};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27};
  padding-top: ${sizes.size14};
  padding-left: ${sizes.size21};
`;

const Reset = styled.div`
  height: ${sizes.size22};
  color: ${colors.orange2};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  text-align: right;
  padding-top: ${sizes.size16};
  margin-left: ${sizes.size141};
`;

const MiddleFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const AppliedFilter = styled.span`
  height: ${sizes.size19};
  color: ${colors.grey12};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin-top: ${(props) =>
    props.className === "cuisines" ? `${sizes.size0}` : `${sizes.size11}`};
  margin-left: ${(props) =>
    props.className === "time" ? `${sizes.size20}` : `${sizes.size11}`};
`;

const AppliedFilterImage = styled.img`
  height: auto;
  width: auto;
  margin-left: ${(props) =>
    props.className === "plus" ? `${sizes.size187}` : `${sizes.size45}`};
  align-self: center;
  margin-top: ${(props) =>
    props.className === "plus" ? `${sizes.size0}` : `${sizes.size11_44}`};
`;

const RadioTitle = styled.div`
  height: ${sizes.size19};
  color: ${colors.grey13};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.sizeNeg0_48};
  line-height: ${sizes.size19};
  margin-left: ${sizes.size21};
  margin-top: ${(props) => (props.className === "radio" ? "22px" : "26px")};
`;

const CheckboxWrapper = styled.div`
  margin-top: ${sizes.size11};
`;

const Input = styled.input`
  width: ${sizes.size16};
  height: ${sizes.size16};
  -webkit-appearance: none;
  margin-left: ${sizes.size21};
  vertical-align: middle;

  :checked {
    background-image: url(${FilterCheckbox});
    height: ${sizes.size16};
  }

  :not(:checked) {
    height: ${sizes.size16};
    width: ${sizes.size16};
    border: ${sizes.size2} solid ${colors.orange1};
    border-radius: ${sizes.halfWidth};
  }
`;

const Label = styled.label`
  height: ${sizes.size19};
  width: ${sizes.size70};
  color: ${colors.orange1};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  margin-left: ${sizes.size7_22};
`;

const EndFlex = styled(MiddleFlex)`
  justify-content: center;
  align-items: center;
  height: ${sizes.size45};
  border: ${sizes.size2} ${colors.white2};
  border-style: solid none;
  margin-top: ${sizes.size28};
`;

const Cuisines = styled(AppliedFilter)`
  display: inline-block;
  width: auto;
  margin-left: ${sizes.size0};
`;

const Button = styled.button`
  display: block;
  height: ${sizes.size45};
  width: ${sizes.size265};
  box-shadow: ${sizes.size0} ${sizes.size4} ${sizes.size10} ${sizes.size0}
    ${colors.red2};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${sizes.size25};
  padding: ${sizes.size0};
  border: solid ${sizes.size1} ${colors.transparentColor};
  border-radius: ${sizes.size6};
  background-image: linear-gradient(${colors.white}, ${colors.white}),
    linear-gradient(${angles.angle90}, ${colors.pink3}, ${colors.orange3});
  background-origin: border-box;
  background-clip: content-box, border-box;

  span {
    height: ${sizes.size19};
    width: ${sizes.size79};
    color: ${colors.white};
    font-family: ${fontFamilies.fontFamilyOsBold};
    font-size: ${sizes.size14};
    letter-spacing: ${sizes.sizeNeg0_18};
    line-height: ${sizes.size19};
    text-align: center;
    text-shadow: ${sizes.size0} ${sizes.size4} ${sizes.size10} ${sizes.size0}
      ${colors.red2};
    background-image: linear-gradient(
      ${angles.angle90},
      ${colors.orange4},
      ${colors.orange5}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: ${colors.transparentColor};
  }
`;

export default Filters;
