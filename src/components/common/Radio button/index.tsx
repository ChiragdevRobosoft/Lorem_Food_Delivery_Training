import React, { FC } from "react";
import styled from "styled-components";
import Unselected from "../../../assets/common/Radio button/radio_button_unselected.png";
import Selected from "../../../assets/common/Radio button/radio_button_selected.png";
import { sizes, colors, fontFamilies } from "../../../variables";
import { radioProps } from "../interfaces";

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
  margin-left: 0;
  margin-bottom: 12.72px;
  height: 16px;
  top: 0;
  margin-left: 21px;
  margin-top: 10px;
`;

export const RadioInput = styled.input`
  width: 16px;
  -webkit-appearance: none;
  margin: 0px 7px;
  margin-left: 0;
  vertical-align: middle;
  &:checked {
    background-image: url(${Selected});
    height: 16px;
  }
  &:checked + label {
    color: ${colors.orange_f78713};
  }
  &:not(:checked) {
    background-image: url(${Unselected});
    height: 15.28px;
  }
  &:not(:checked) + label {
    color: ${colors.grey_606060};
  }
`;

const OptionName = styled.label`
  height: 19px;
  font-size: ${sizes.size14};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  vertical-align: middle;
`;

export default Radio;
