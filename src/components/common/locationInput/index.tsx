import styled from "styled-components";
import { FC, useState } from "react";
import { colors, fontFamilies, sizes } from "../../../variables";
import pinIcon from "./../../../assets/common/foodSearchBox/icn_pin.png";
import gpsIcon from "./../../../assets/common/foodSearchBox/icn_gps_indicator.png";
import data from "../../../components/common/constants.json";

interface locationInputProps {
  className: string;
  locationVal?: string;
  setLocationVal?: React.Dispatch<React.SetStateAction<string>>;
}

const LocationInput: FC<locationInputProps> = ({
  className,
  locationVal,
  setLocationVal,
}) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setLocationVal === undefined) return;
    setLocationVal(e.target.value);
  };

  return (
    <Locationholder className={className}>
      <Location
        className={className}
        type="text"
        name="location"
        placeholder={data.foodSearchBox.placeHolder2}
        value={locationVal}
        onChange={(event) => changeValue(event)}
      />
      <LocBtn className={className} />
    </Locationholder>
  );
};
export default LocationInput;

const Locationholder = styled.div`
  position: relative;
  height: ${(props) => (props.className === "home" ? `70px` : `50px`)};
  width: ${(props) => (props.className === "home" ? `338px` : `283px`)};
  border-radius: ${(props) => (props.className === "home" ? `10px` : `4px`)};
  margin: 0;
`;

const Location = styled.input`
  box-sizing: border-box;
  height: ${(props) => (props.className === "home" ? `70px` : `50px`)};
  width: ${(props) => (props.className === "home" ? `338px` : `283px`)};
  border-radius: ${(props) => (props.className === "home" ? `10px` : `4px`)};
  background-color: ${colors.white_ffffff};
  box-shadow: ${(props) =>
    props.className === "home"
      ? `0 2px 10px 0 ${colors.black_000000_1}`
      : `0 5px 10px 0 ${colors.black_000000_007}`};
  background-image: url(${pinIcon});
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.className === "home" ? `19px 25px` : `15px 20px`};
  padding-left: ${(props) => (props.className === "home" ? `46px` : `34px`)};
  outline: none;
  border: none;
  font-family: ${(props) =>
    props.className === "home"
      ? `${fontFamilies.fontFamilyOsRegular}`
      : `${fontFamilies.fontFamilySFNSRegular}`};
  font-size: ${sizes.size14};
  letter-spacing: -0.24px;
  line-height: ${(props) =>
    props.className === "home" ? `${sizes.size19}` : `${sizes.size17}`};
  color: ${(props) =>
    props.className === "home"
      ? `${colors.grey_4c4c4c}`
      : `${colors.grey_2d2d2d}`};
  ::placeholder {
    height: 19px;
    width: 203.34px;
    color: ${(props) =>
      props.className === "home"
        ? `${colors.grey_4c4c4c}`
        : `${colors.grey_2d2d2d}`};
    font-family: ${(props) =>
      props.className === "home"
        ? `${fontFamilies.fontFamilyOsRegular}`
        : `${fontFamilies.fontFamilySFNSRegular}`};
    font-size: ${sizes.size14};
    letter-spacing: -0.24px;
    line-height: ${(props) =>
      props.className === "home" ? `${sizes.size19}` : `${sizes.size17}`};
  }
`;

const LocBtn = styled.button`
  position: absolute;
  top: ${(props) => (props.className === "home" ? `24px` : `16px`)};
  right: ${(props) => (props.className === "home" ? `21px` : `15px`)};
  background-color: ${colors.white_ffffff};
  background-image: url(${gpsIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 20px;
  width: 20px;
  border: none;
`;
