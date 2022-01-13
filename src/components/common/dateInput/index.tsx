import styled from "styled-components";
import { FC, useState } from "react";
import { colors, fontFamilies, sizes } from "../../../variables";
import timeDateIcon from "./../../../assets/common/foodSearchBox/present-t&d-firstpage.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

interface dateInputProps {
  className: string;
}

const DateInput: FC<dateInputProps> = ({ className }) => {
  let today = moment().format("MMMM DD YYYY");
  const [newDate, setNewDate]: any = useState("");

  return (
    <>
      {className === "home" ? (
        <Dateholder className={className}>
          <DatePicker
            selected={newDate}
            onChange={setNewDate}
            className="datePicker"
            dateFormat="MMMM dd, yyyy"
            placeholderText={today}
            wrapperClassName="datePicker"
          />
          <DateBtn className={className} />
        </Dateholder>
      ) : (
        <Dateholder className={className}>
          <DatePicker
            selected={newDate}
            onChange={setNewDate}
            className="datePicker"
            dateFormat="MMMM dd, yyyy"
            placeholderText={today}
            wrapperClassName="datePicker"
            customInput={<DateBtn2 className={className} />}
          />
        </Dateholder>
      )}
    </>
  );
};

export default DateInput;

const Dateholder = styled.div`
  position: relative;
  box-sizing: border-box;
  height: ${(props) => (props.className === "home" ? `70px` : `50px`)};
  width: ${(props) => (props.className === "home" ? `247px` : `50px`)};
  border-radius: ${(props) => (props.className === "home" ? `10px` : `4px`)};
  margin: 0;
  .datePicker {
    box-sizing: border-box;
    position: relative;
    height: ${(props) => (props.className === "home" ? `70px` : `50px`)};
    width: ${(props) => (props.className === "home" ? `247px` : `50px`)};
    border-radius: ${(props) => (props.className === "home" ? `10px` : `4px`)};
    input {
      box-sizing: border-box;
      height: ${(props) => (props.className === "home" ? `70px` : null)};
      width: ${(props) => (props.className === "home" ? `245px` : null)};
      border-radius: 10px;
      box-shadow: ${(props) =>
        props.className === "home"
          ? `0 2px 10px 0 ${colors.black_000000_1}`
          : `0 5px 10px 0 ${colors.black_000000_007}`};
      color: ${colors.grey_4c4c4c};
      font-family: ${fontFamilies.fontFamilySFNSRegular};
      font-size: ${(props) =>
        props.className === "home" ? `${sizes.size14}` : null};
      letter-spacing: -0.24;
      line-height: ${sizes.size17};
      background-image: none;
      padding-left: ${(props) => (props.className === "home" ? `23px` : null)};
      padding-right: ${(props) => (props.className === "home" ? `89px` : null)};
      background-color: ${colors.white_ffffff};
      border: none;
      outline: none;
      margin: 0;
    }
  }
`;

const DateBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 8px;
  height: ${(props) => (props.className === "home" ? `54px` : null)};
  width: ${(props) => (props.className === "home" ? `54px` : null)};
  background-color: ${colors.transparentColor};
  background-image: url(${timeDateIcon});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  padding: 0;
  border: none;
`;

const DateBtn2 = styled.button`
  height: 50px;
  width: 50px;
  background-color: ${colors.transparentColor};
  background-image: url(${timeDateIcon});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  padding: 0;
  border: none;
`;
