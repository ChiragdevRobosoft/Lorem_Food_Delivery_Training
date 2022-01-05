import React, { FC } from "react";
import styled from "styled-components";
import Unselected from "../../../assets/common/Radio button/radio_button_unselected.png";
import Selected from "../../../assets/common/Radio button/radio_button_selected.png";
import { sizes, colors, fontFamilies, radioProps } from "../../../variables";

const Radio: FC<radioProps> = ({ name, options, handleChange }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <Wrapper key={index}>
            <RadioInput
              type="radio"
              id={option}
              name={name}
              value={option}
              onClick={handleChange}
            />
            <OptionName htmlFor={option}>{option}</OptionName>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: block;
  margin-left: ${sizes.size0};
  margin-bottom: 12.72px;
  height: ${sizes.size16};
  top: ${sizes.size0};
  margin-left: 21px;
  margin-top: 10px;
`;

const RadioInput = styled.input`
  width: ${sizes.size16};
  -webkit-appearance: none;
  margin: 0px 7px;
  margin-left: ${sizes.size0};
  vertical-align: middle;
  &:checked {
    background-image: url(${Selected});
    height: ${sizes.size16};
  }
  &:checked + label {
    color: ${colors.orange1};
  }
  &:not(:checked) {
    background-image: url(${Unselected});
    height: 15.28px;
  }
  &:not(:checked) + label {
    color: ${colors.grey5};
  }
`;

const OptionName = styled.label`
  height: ${sizes.size19};
  font-size: ${sizes.size14};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  vertical-align: middle;
`;

export default Radio;
