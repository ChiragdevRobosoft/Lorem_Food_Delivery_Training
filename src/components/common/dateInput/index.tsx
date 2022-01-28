import styled from "styled-components";
import { FC, useState } from "react";
import { colors, fontFamilies, sizes } from "../../../variables";
import timeDateIcon from "./../../../assets/common/foodSearchBox/present-t&d-firstpage.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import Label from "../label";

interface dateInputProps {
  className?: string;
}

const DateInput: FC<dateInputProps> = ({ className }) => {
  let today = moment().format("MMMM DD YYYY");
  const [newDate, setNewDate]: any = useState("");
  const handleClick = () => {
    const pickerElement = document.getElementsByClassName(
      "date-picker"
    )[0] as HTMLElement;
    pickerElement.click();
  };
  return (
    <>
      <Dateholder className={className}>
        <DatePicker
          selected={newDate}
          onChange={setNewDate}
          className="date-picker"
          dateFormat="MMMM dd, yyyy"
          placeholderText={today}
          wrapperClassName="datePicker"
        />
        {className === "home" ? (
          <DateBtn className={className} onClick={handleClick} />
        ) : (
          <ChangeLabel content="Change" onClick={handleClick} />
        )}
      </Dateholder>
    </>
  );
};

export default DateInput;

const Dateholder = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.className === "home" ? `70px` : "36px")};
  width: ${(props) => (props.className === "home" ? `247px` : "100%")};
  border-radius: ${(props) => (props.className === "home" ? `10px` : "none")};
  border-bottom: ${(props) =>
    props.className === "home"
      ? "none"
      : `1px solid ${colors.black_000000_53}`};
  margin: 0;
  .datePicker {
    box-sizing: border-box;
    position: relative;
    height: ${(props) => (props.className === "home" ? `70px` : "36px")};
    width: ${(props) => (props.className === "home" ? `247px` : "440px")};
    border-radius: ${(props) => (props.className === "home" ? `10px` : "none")};
    input {
      box-sizing: border-box;
      height: ${(props) => (props.className === "home" ? `70px` : "22px")};
      width: ${(props) => (props.className === "home" ? `245px` : "440px")};
      border-radius: ${(props) =>
        props.className === "home" ? `10px` : "none"};
      box-shadow: ${(props) =>
        props.className === "home"
          ? `0 2px 10px 0 ${colors.black_000000_1}`
          : "none"};
      color: ${(props) =>
        props.className === "home"
          ? `${colors.grey_4c4c4c}`
          : `${colors.grey_4a4a4a}`};
      font-family: ${(props) =>
        props.className === "home"
          ? `${fontFamilies.fontFamilySFNSRegular}`
          : `${fontFamilies.fontFamilyOsRegular}`};
      font-size: ${(props) =>
        props.className === "home" ? `${sizes.size14}` : `${sizes.size16}`};
      letter-spacing: ${(props) =>
        props.className === "home"
          ? `${sizes.sizeNeg0_24}`
          : `${sizes.sizeNeg0_27}`};
      line-height: ${(props) =>
        props.className === "home" ? `${sizes.size17}` : `${sizes.size22}`};
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

const ChangeLabel = styled(Label)`
  height: 19px;
  width: 50px;
  color: #f67e03;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: right;
  cursor: pointer;
`;
