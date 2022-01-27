import styled from "styled-components";
import React, { FC, useState } from "react";
import { colors, fontFamilies, sizes } from "./../../../variables";
import searchIcon from "./../../../assets/common/foodSearchBox/search-icon-home.png";
import data from "../../../components/common/constants.json";
import Image from "../../common/image";
import { useNavigate } from "react-router-dom";

interface SearchBoxProps {
  className: string;
  searchVal?: string;
  locationVal?: string;
  setSearchVal?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBoxComp: FC<SearchBoxProps> = ({
  className,
  searchVal,
  locationVal,
  setSearchVal,
}) => {
  let navigate = useNavigate();
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchVal === undefined) {
      return;
    }
    setSearchVal(e.target.value);
  };

  const handleClick = () => {
    if (setSearchVal === undefined) {
      return;
    }
    if (searchVal !== "" && locationVal !== "") {
      navigate(`${searchVal}/${locationVal}`);
    }
  };

  return (
    <SearchContainer>
      <SearchBox
        className={className}
        type="text"
        name="food-search"
        placeholder={data.foodSearchBox.placeHolder1}
        value={searchVal}
        onChange={(event) => changeValue(event)}
      />
      <SearchImage
        src={searchIcon}
        onClick={handleClick}
        className={className}
      />
    </SearchContainer>
  );
};

export default SearchBoxComp;

const SearchContainer = styled.div`
  position: relative;
`;

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

const SearchImage = styled(Image)`
  position: absolute;
  top: 30%;
  left: ${(props) => (props.className === "home" ? "25px" : "auto")};
  right: ${(props) => (props.className === "home" ? "auto" : "19px")};
`;
