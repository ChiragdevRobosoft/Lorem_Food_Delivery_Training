import React, { FC } from "react";
import styled from "styled-components";
import Unselected from "../../../assets/restaurantList/radio_button_unselected.png";
import Selected from "../../../assets/restaurantList/radio_button_selected.png";
import { sizes, colors, fontFamilies, radioProps } from "../../../variables";

const Radio: FC<radioProps> = ({ name, options, handleChange }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <Wrapper key={index}>
            <Input
              type="radio"
              id={option}
              name={name}
              value={option}
              onClick={handleChange}
            />
            <Label htmlFor={option}>{option}</Label>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: block;
  margin-left: ${sizes.size0};
  margin-bottom: ${sizes.size12_72};
  height: ${sizes.size16};
  top: ${sizes.size0};
  margin-left: 21px;
  margin-top: 10px;
`;

const Input = styled.input`
  width: ${sizes.size16};
  -webkit-appearance: none;
  margin: ${sizes.size0} ${sizes.size7};
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
    height: ${sizes.size15_28};
  }

  &:not(:checked) + label {
    color: ${colors.grey5};
  }
`;

const Label = styled.label`
  height: ${sizes.size19};
  font-size: ${sizes.size14};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  vertical-align: middle;
`;

export default Radio;
