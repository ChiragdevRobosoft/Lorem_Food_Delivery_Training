import styled from "styled-components";
import searchIcon from "./../../../assets/common/foodSearchBox/search-icon-home.png";
import pinIcon from "./../../../assets/common/foodSearchBox/icn_pin.png";
import gpsIcon from "./../../../assets/common/foodSearchBox/icn_gps_indicator.png";
import timeDateIcon from "./../../../assets/common/foodSearchBox/present-t&d-firstpage.png";
import React, { FC } from "react";
import { colors, fontFamilies, sizes } from "../../../variables";

interface foodSearchProps {
  pageType: string;
}

const Foodsearch: FC<foodSearchProps> = ({ pageType }) => {
  return (
    <Wrapper className={pageType}>
      <SearchBox
        className={pageType}
        type="text"
        name="food-search"
        placeholder="Search your restaurant or cuisines"
      />
      <LocDateDiv className={pageType}>
        <LocDiv className={pageType}>
          <LocInput
            className={pageType}
            type="text"
            name="location"
            placeholder="Downtown Burj Khalifa, Dubai"
          />
          <LocButton className={pageType} />
        </LocDiv>
        <DateDiv className={pageType}>
          <DateInput
            className={pageType}
            type="text"
            name="date"
            placeholder="Search your restaurant or cuisines"
            value="Today, 28 April, 2018"
          />
          <DateButton className={pageType} />
        </DateDiv>
      </LocDateDiv>
    </Wrapper>
  );
};
export default Foodsearch;

const Wrapper = styled.div`
//border: 1px solid black;
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size889} ${sizes.size176} ${sizes.size420};`
      : null}
  height: ${(props) => (props.className === "home" ? `${sizes.size175}` : ``)};
  width: ${(props) => (props.className === "home" ? `${sizes.size611}` : ``)};
  display: flex;
  flex-direction: column;
`;

const SearchBox = styled.input`
  height: ${(props) =>
    props.className === "home" ? `${sizes.size70}` : `${sizes.size50}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size611}` : `${sizes.size605}`};
  border-radius: ${(props) =>
    props.className === "home" ? `${sizes.size10}` : `${sizes.size4}`};
  background-color: ${colors.white};
  box-shadow: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size4} ${sizes.size20} ${sizes.size0}
    rgba(0, 0, 0, 0.14)`
      : `${sizes.size0} ${sizes.size5} ${sizes.size10} ${sizes.size0}
    rgba(0, 0, 0, 0.07)`};
  outline: none;
  border: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 20px 27px;
  background-position: ${(props) =>
    props.className === "home" ? `${sizes.size25} ${sizes.size22}` : null};
  padding-left: ${sizes.size61};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  ::placeholder {
    height: ${sizes.size22};
    width: ${sizes.size296};
    color: #bdbdbd;
    font-family: ${fontFamilies.fontFamilyOsRegular};
    font-size: ${sizes.size16};
    letter-spacing: -0.27;
    line-height: ${sizes.size22};
    margin: 0px;
  }
  display: flex;
  //border: 1px solid yellow;
`;

const LocDateDiv = styled.div`
  //border: 1px solid green;
  width: ${(props) => (props.className === "home" ? `${sizes.size611}` : null)};
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : null)};
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size35} ${sizes.size0} ${sizes.size0} ${sizes.size0}`
      : ``};
  display: flex;
  flex-direction: row;
`;

const LocDiv = styled.div`
  height: ${(props) =>
    props.className === "home" ? `${sizes.size70}` : `${sizes.size50}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size338}` : `${sizes.size283}`};
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size22} ${sizes.size0} ${sizes.size4}`
      : null};
  display: flex;
`;

const LocInput = styled.input`
  height: ${(props) =>
    props.className === "home" ? `${sizes.size70}` : `${sizes.size50}`};
  width: ${(props) =>
    props.className === "home" ? `${sizes.size338}` : `${sizes.size283}`};
  border-radius: ${(props) =>
    props.className === "home" ? `${sizes.size10}` : `${sizes.size4}`};
  background-color: ${colors.white};
  box-shadow: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0} rgba(0, 0, 0, 0.1)`
      : `${sizes.size0} ${sizes.size5} ${sizes.size10} ${sizes.size0} rgba(0, 0, 0, 0.07)`};
  background-image: url(${pinIcon});
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.className === "home" ? `${sizes.size19} ${sizes.size25}` : ``};
  padding-left: ${(props) =>
    props.className === "home" ? `${sizes.size46}` : ``};
  font-family: ${fontFamilies.fontFamilyOsRegular}
  outline: none;
  border: none;
`;

const LocButton = styled.button`
  background-color: ${colors.white};
  background-image: url(${gpsIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: ${(props) => (props.className === "home" ? `${sizes.size20}` : ``)};
  width: ${(props) => (props.className === "home" ? `${sizes.size20}` : ``)};
  margin: ${(props) =>
    props.className === "home"
      ? `auto ${sizes.sizen21} auto ${sizes.sizen41}`
      : ``};
  border: none;
`;

const DateDiv = styled.div`
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : ``)};
  width: ${(props) => (props.className === "home" ? `${sizes.size247}` : ``)};
  margin: ${(props) => (props.className === "home" ? `${sizes.size0}` : ``)};
  display: flex;
`;

const DateInput = styled.input`
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : ``)};
  width: ${(props) => (props.className === "home" ? `${sizes.size247}` : ``)};
  color: ${colors.grey5};
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: ${(props) =>
    props.className === "home" ? `${sizes.size14}` : ``};
  letter-spacing: -0.24px;
  line-height: ${sizes.size17};
  background-image: none;
  padding-left: ${(props) =>
    props.className === "home" ? `${sizes.size23}` : ``};
  background-color: ${colors.white};
  box-shadow: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0} rgba(0, 0, 0, 0.1)`
      : `${sizes.size0} ${sizes.size5} ${sizes.size10} ${sizes.size0} rgba(0, 0, 0, 0.07)`};
  border-radius: ${sizes.size10};
  border: none;
  outline: none;
`;

const DateButton = styled.button`
  height: ${(props) => (props.className === "home" ? `${sizes.size54}` : ``)};
  width: ${(props) => (props.className === "home" ? `${sizes.size54}` : ``)};
  background-color: ${colors.white};
  background-image: url(${timeDateIcon});
  background-repeat: no-repeat;
  background-position: center;
  margin: ${(props) =>
    props.className === "home"
      ? `auto ${sizes.sizen10} auto ${sizes.sizen64}`
      : ``};
  box-shadow: ${sizes.size0} 2px 6px ${sizes.size0} rgba(0, 0, 0, 0.05);
  border: none;
`;
