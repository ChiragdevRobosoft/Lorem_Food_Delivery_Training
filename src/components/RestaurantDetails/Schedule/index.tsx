import React, { FC } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Label from "../../common/label";
import { colors, sizes, angles, fontFamilies } from "../../../variables";
import data from "../../common/constants.json";
import DateInput from "../../common/dateInput";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import Timepicker from "../../common/TimePicker";
import Buttons from "../../common/button";

const Schedule: FC<{
  open: boolean;
  handleClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, handleClose, setOpen }) => {
  const modalStyles = {
    borderRadius: `${sizes.size8}`,
    boxShadow: `0 2px 10px 0 ${colors.black_000000_1}`,
    height: "457px",
    width: "570px",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      center
      styles={{ modal: modalStyles }}
      focusTrapped={false}
    >
      <Wrapper>
        <TitleLabel content={data.schedule.title} />
        <Description content={data.schedule.description} />
        <DateTimeLabel content={data.schedule.dateTitle} />
        <DateInput />
        <DateTimeLabel content={data.schedule.timeTitle} />
        <Timepicker />
        <ScheduleButton
          name={data.schedule.buttonText}
          onClick={() => setOpen(false)}
        />
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px;
`;

const TitleLabel = styled(Label)`
  display: inline;
  margin: auto;
  height: ${sizes.size33};
  color: ${colors.grey_4c4c4c};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size24};
  letter-spacing: ${sizes.sizeNeg0_34};
  line-height: ${sizes.size33};
`;

const DateTimeLabel = styled(Label)`
  height: ${sizes.size17};
  color: ${colors.grey_858585};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.sizeNeg0_24};
  line-height: ${sizes.size17};
  margin-top: 24px;
  margin-bottom: 11px;
`;

const Description = styled(Label)`
  height: ${sizes.size23};
  color: ${colors.black_000000};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size17};
  letter-spacing: -0.41px;
  line-height: ${sizes.size23};
  margin-top: 40px;
  margin-bottom: 6px;
`;

const ScheduleButton = styled(Buttons)`
  background: linear-gradient(
    ${angles.angle138_33},
    ${colors.red_f3698e} 0%,
    ${colors.yellow_feb456} 100%
  );
  margin-top: 55px;
  cursor: pointer;
`;

export default Schedule;
