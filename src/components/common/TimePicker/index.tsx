import React from "react";
import styled from "styled-components";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
import Label from "../label";
import data from "../constants.json";
import { colors, fontFamilies, sizes } from "../../../variables";
import { queries } from "../breakpoints";

const Timepicker = () => {
  const value = new Date(moment().format());
  return (
    <Wrapper>
      <TimePickerComponent value={value} />
      <ChangeLabel content={data.schedule.change} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid ${colors.black_000000_53};
  .e-time-wrapper {
    width: 490px;
  }
  .e-input-group.e-control-wrapper {
    border-width: 0;
    width: 490px;
    padding-bottom: ${sizes.size6};
    &:hover {
      border: none;
    }
  }
  .e-input-group input.e-input,
  .e-input-group.e-control-wrapper input.e-input,
  .e-input-group textarea.e-input,
  .e-input-group.e-control-wrapper textarea.e-input {
    height: ${sizes.size22};
    color: ${colors.grey_4a4a4a};
    font-family: ${fontFamilies.fontFamilyOsRegular};
    font-size: ${sizes.size16};
    letter-spacing: ${sizes.sizeNeg0_27};
    line-height: ${sizes.size22};
    ${queries.tablet} {
      font-size: ${sizes.size14};
      line-height: ${sizes.size16};
      height: ${sizes.size16};
    }
  }
  .e-input-group-icon.e-time-icon.e-icons {
    &:before {
      opacity: 0;
      height: 19px;
      width: 50px;
      z-index: 2;
    }
  }
  .e-float-input .e-clear-icon,
  .e-float-input.e-control-wrapper .e-clear-icon,
  .e-input-group .e-clear-icon,
  .e-input-group.e-control-wrapper .e-clear-icon {
    display: none;
  }
`;

const ChangeLabel = styled(Label)`
  height: ${sizes.size19};
  color: ${colors.orange_f67e03};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size19};
  text-align: right;
  position: absolute;
  right: 0;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size16};
    height: ${sizes.size16};
  }
`;

export default Timepicker;
