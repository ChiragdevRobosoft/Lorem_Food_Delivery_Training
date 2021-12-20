import React, { FC } from "react";
import styled from "styled-components";
import Unselected from "../../../../assets/restaurantList/radio_button_unselected.png";
import Selected from "../../../../assets/restaurantList/radio_button_selected.png";
import { sizes, colors, fontFamilies } from "../../../../variables";

interface radioProps {
  name: string;
  options: string[];
}

const Radio: FC<radioProps> = ({ name, options }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <Wrapper key={index}>
            <input type="radio" id={option} name={name} value={option} />
            <label htmlFor={option}>{option}</label>
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

  input {
    width: ${sizes.size16};
    -webkit-appearance: none;
    margin: ${sizes.size0} ${sizes.size7};
    margin-left: ${sizes.size0};
    vertical-align: middle;
  }

  label {
    height: ${sizes.size19};
    font-size: ${sizes.size14};
    font-family: ${fontFamilies.fontFamilyOsSemiBold};
    letter-spacing: ${sizes.sizeNeg0_24};
    line-height: ${sizes.size19};
    vertical-align: middle;
  }

  input:checked {
    background-image: url(${Selected});
    height: ${sizes.size16};
  }

  input:checked + label {
    color: ${colors.orange1};
  }

  input:not(:checked) {
    background-image: url(${Unselected});
    height: ${sizes.size15_28};
  }

  input:not(:checked) + label {
    color: ${colors.grey5};
  }
`;

export default Radio;
