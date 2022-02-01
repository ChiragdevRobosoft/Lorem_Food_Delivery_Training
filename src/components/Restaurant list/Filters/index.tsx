import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import FilterMinus from "../../../assets/restaurantList/filter_minus.png";
import FilterCheckbox from "../../../assets/restaurantList/filter_checkbox.png";
import Radio from "../../common/Radio button";
import FilterPlus from "../../../assets/restaurantList/filter_plus.png";
import data from "../../common/constants.json";
import { fontFamilies, colors, sizes, angles } from "../../../variables";
import { queries } from "../../common/breakpoints";

const Filters = () => {
  const { register, handleSubmit, control, reset } = useForm();
  return (
    <Wrapper>
      <TopFlex>
        <Title>{data.filterData.title}</Title>
        <Reset onClick={() => reset()}>{data.filterData.reset}</Reset>
      </TopFlex>
      <MiddleFlex>
        <AppliedFilter className="time">{data.filterData.time}</AppliedFilter>
        <AppliedFilter className="cost">
          &amp; {data.filterData.cost}
        </AppliedFilter>
        <AppliedFilterImage src={FilterMinus} />
      </MiddleFlex>
      <RadioTitle>{data.filterData.radioTitle}</RadioTitle>
      <CheckboxWrapper>
        <CheckboxInput
          type="checkbox"
          id="Open"
          value="Open Now"
          {...register("Open")}
        />
        <CheckboxName htmlFor="Open">
          {data.filterData.checkboxTitle}
        </CheckboxName>
      </CheckboxWrapper>
      {data.radio.map(
        (radioInfo: { name: string; options: string[] }, index: number) => {
          return (
            <React.Fragment key={index}>
              <RadioTitle className="radio">{radioInfo.name}</RadioTitle>
              <Controller
                control={control}
                name={radioInfo.name}
                render={({ field: { onChange, value } }) => (
                  <Radio
                    options={radioInfo.options}
                    name={radioInfo.name}
                    value={value}
                    handleChange={(e): void =>
                      onChange((e.target as HTMLInputElement).value)
                    }
                  />
                )}
              />
            </React.Fragment>
          );
        }
      )}
      <EndFlex>
        <Cuisines className="cuisines">{data.filterData.cuisines}</Cuisines>
        <AppliedFilterImage src={FilterPlus} className="plus" />
      </EndFlex>
      <ApplyButton>
        <ApplyText>{data.filterData.apply}</ApplyText>
      </ApplyButton>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  height: 672px;
  width: 304px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white_ffffff};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black_000000_1};
  ${queries.tabletLandscape} {
    width: auto;
  }
  ${queries.tablet} {
    height: 650px;
  }
`;

const TopFlex = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 21px;
  border-bottom: ${sizes.size2} solid ${colors.white_e1e1e1};
  ${queries.tablet} {
    height: 40px;
  }
`;

const Title = styled.div`
  height: 27px;
  width: 60px;
  color: ${colors.grey_1b1c1d};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size20};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27};
  padding-top: 14px;
  ${queries.tablet} {
    font-size: ${sizes.size16};
    line-height: ${sizes.size18};
    height: ${sizes.size18};
  }
`;

const Reset = styled.div`
  cursor: pointer;
  height: 22px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  text-align: right;
  padding-top: 16px;
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const MiddleFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 21px;
`;

const AppliedFilter = styled.span`
  height: 19px;
  color: ${colors.grey_5e5e5e};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  margin-top: ${(props) => (props.className === "cuisines" ? "0" : "11px")};
  margin-left: ${(props) => (props.className === "time" ? "0px" : "11px")};
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const AppliedFilterImage = styled.img`
  height: auto;
  width: auto;
  align-self: center;
  margin-top: ${(props) => (props.className === "plus" ? "0" : "11.44px")};
`;

const RadioTitle = styled.div`
  height: 19px;
  color: ${colors.grey_9e9999};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.sizeNeg0_48};
  line-height: ${sizes.size19};
  margin-left: 21px;
  margin-top: ${(props) => (props.className === "radio" ? "22px" : "26px")};
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const CheckboxWrapper = styled.div`
  margin-top: 11px;
`;

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  -webkit-appearance: none;
  margin-left: 21px;
  vertical-align: middle;

  :checked {
    background-image: url(${FilterCheckbox});
  }

  :not(:checked) {
    border: ${sizes.size2} solid ${colors.orange_f78713};
    border-radius: ${sizes.halfWidth};
  }
`;

const CheckboxName = styled.label`
  height: 19px;
  color: ${colors.orange_f78713};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  margin-left: 7.22px;
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const EndFlex = styled(MiddleFlex)`
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border: ${sizes.size2} ${colors.white_e1e1e1};
  border-style: solid none;
  margin-top: 28px;
`;

const Cuisines = styled(AppliedFilter)`
  display: inline-block;
  width: auto;
  margin-left: 0px;
`;

const ApplyButton = styled.button`
  display: block;
  height: 45px;
  width: 265px;
  box-shadow: ${sizes.size0} ${sizes.size4} ${sizes.size10} ${sizes.size0}
    ${colors.red_f67e7e_38};
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  padding: 0px;
  border: solid ${sizes.size1} ${colors.transparentColor};
  border-radius: ${sizes.size6};
  background-image: linear-gradient(
      ${colors.white_ffffff},
      ${colors.white_ffffff}
    ),
    linear-gradient(
      ${angles.angle90},
      ${colors.pink_f2738a},
      ${colors.orange_faa369}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  ${queries.tabletLandscape} {
    width: auto;
  }
`;

const ApplyText = styled.span`
  height: 19px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.sizeNeg0_18};
  line-height: ${sizes.size19};
  text-align: center;
  text-shadow: ${sizes.size0} ${sizes.size4} ${sizes.size10} ${sizes.size0}
    ${colors.red_f67e7e_38};
  background-image: linear-gradient(
    ${angles.angle90},
    ${colors.orange_f5867b},
    ${colors.orange_f99f6c}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: ${colors.transparentColor};
  ${queries.tabletLandscape} {
    padding: 0 70px;
  }
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

export default Filters;
