import styled from "styled-components";
import React, { FC, useState } from "react";
import { colors, fontFamilies, sizes } from "./../../../variables";
import searchIcon from "./../../../assets/common/foodSearchBox/search-icon-home.png";
import data from "../../../components/common/constants.json";

interface SearchBoxProps {
  className: string;
}

const SearchBoxComp: FC<SearchBoxProps> = ({ className }) => {
  const [searchVal, setSearchVal] = useState("");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <SearchBox
      className={className}
      type="text"
      name="food-search"
      placeholder={data.foodSearchBox.placeHolder1}
      value={searchVal}
      onChange={(event) => changeValue(event)}
    />
  );
};

export default SearchBoxComp;

const SearchBox = styled.input`
  box-sizing: border-box;
  height: ${(props) => (props.className === "home" ? `70px` : `50px`)};
  width: ${(props) => (props.className === "home" ? `611px` : `605px`)};
  border-radius: ${(props) => (props.className === "home" ? `10px` : `4px`)};
  background-color: ${colors.white_ffffff};
  box-shadow: ${(props) =>
    props.className === "home"
      ? `0 4px 20px 0
      ${colors.black_000000_014}`
      : `0px 5px 10px 0px
      ${colors.black_000000_007}`};
  outline: none;
  border: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: ${(props) =>
    props.className === "home" ? `20px 27px` : `20px 15px`};
  background-position: ${(props) =>
    props.className === "home" ? `25px 22px` : `570.78px`};
  padding-left: ${(props) => (props.className === "home" ? `61px` : `15px`)};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size16};
  letter-spacing: -0.27;
  line-height: ${sizes.size22};
  color: ${(props) =>
    props.className === "home"
      ? `${colors.grey_393939}`
      : `${colors.grey_6f6f6f}`};
  ::placeholder {
    height: 22px;
    width: 296px;
    color: ${colors.grey_bdbdbd};
    font-family: ${fontFamilies.fontFamilyOsRegular};
    font-size: ${sizes.size16};
    letter-spacing: -0.27;
    line-height: ${sizes.size22};
    margin: 0px;
  }
  display: flex;
`;
