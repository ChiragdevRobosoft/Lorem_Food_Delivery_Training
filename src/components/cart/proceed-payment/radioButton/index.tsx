import React, { FC } from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies } from "../../../../variables";
import data from "../../../common/constants.json";
import Label from "../../../common/label";
import Unselected from "../../../../assets/common/Radio button/radio_button_unselected.png";

interface RadioButtonProps {
  idValue: string;
  radioName: string;
  handleRadioClick: React.MouseEventHandler<HTMLInputElement>;
  option: string;
  checkedStatus: boolean;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
  return (
    <Wrapper>
      <RadioInput
        type="radio"
        id={props.idValue}
        name={props.radioName}
        value={props.idValue}
        onClick={props.handleRadioClick}
        checked={props.checkedStatus}
      />
      <OptionNameLabel htmlFor={props.idValue} content={props.option} />
    </Wrapper>
  );
};
export default RadioButton;

const Wrapper = styled.div`
  display: block;
  height: 16px;
  top: 0;
`;

const RadioInput = styled.input`
  width: 16px;
  margin: 0px 7px;
  margin-left: 0;
  vertical-align: middle;

  &:checked + label {
    color: ${colors.grey_4a4a4a};
  }
  &:not(:checked) {
    background-image: url(${Unselected});
    height: 15.28px;
  }
  &:not(:checked) + label {
    color: ${colors.grey_4a4a4a};
  }
`;

const OptionNameLabel = styled(Label)`
  height: 19px;
  font-size: ${sizes.size14};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  vertical-align: middle;
`;
