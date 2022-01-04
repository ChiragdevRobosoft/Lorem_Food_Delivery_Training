import styled from "styled-components";
import { FC } from "react";
import { colors, fontFamilies, sizes } from "../../../variables";
import searchIcon from "./../../../assets/common/foodSearchBox/search-icon-home.png";
import pinIcon from "./../../../assets/common/foodSearchBox/icn_pin.png";
import gpsIcon from "./../../../assets/common/foodSearchBox/icn_gps_indicator.png";
import timeDateIcon from "./../../../assets/common/foodSearchBox/present-t&d-firstpage.png";
import data from "./../constants.json";
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
        placeholder={data.foodSearchBox.placeHolder1}
      />
      <LocAndDate className={pageType}>
        <Locationholder className={pageType}>
          <Location
            className={pageType}
            type="text"
            name="location"
            placeholder={data.foodSearchBox.placeHolder2}
          />
          <LocBtn className={pageType} />
        </Locationholder>
        <Dateholder className={pageType}>
          <Date
            className={pageType}
            type="text"
            name="date"
            placeholder={data.foodSearchBox.placeHolder3}
            value={data.foodSearchBox.val}
          />
          <DateBtn className={pageType} />
        </Dateholder>
      </LocAndDate>
    </Wrapper>
  );
};
export default Foodsearch;

const Wrapper = styled.div`
  margin: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size889} ${sizes.size176} ${sizes.size420};`
      : null}
  height: ${(props) =>
    props.className === "home" ? `${sizes.size175}` : null};
  width: ${(props) => (props.className === "home" ? `${sizes.size611}` : null)};
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

const LocAndDate = styled.div`
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

const Locationholder = styled.div`
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

const Location = styled.input`
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
    props.className === "home" ? `${sizes.size19} ${sizes.size25}` : null};
  padding-left: ${(props) =>
    props.className === "home" ? `${sizes.size46}` : ``};
  font-family: ${fontFamilies.fontFamilyOsRegular}
  outline: none;
  border: none;
`;

const LocBtn = styled.button`
  background-color: ${colors.white};
  background-image: url(${gpsIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: ${(props) => (props.className === "home" ? `${sizes.size20}` : null)};
  width: ${(props) => (props.className === "home" ? `${sizes.size20}` : null)};
  margin: ${(props) =>
    props.className === "home"
      ? `auto ${sizes.sizen21} auto ${sizes.sizen41}`
      : null};
  border: none;
`;

const Dateholder = styled.div`
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : null)};
  width: ${(props) => (props.className === "home" ? `${sizes.size247}` : null)};
  margin: ${(props) => (props.className === "home" ? `${sizes.size0}` : null)};
  display: flex;
`;

const Date = styled.input`
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : null)};
  width: ${(props) => (props.className === "home" ? `${sizes.size247}` : null)};
  color: ${colors.grey5};
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: ${(props) =>
    props.className === "home" ? `${sizes.size14}` : null};
  letter-spacing: -0.24;
  line-height: ${sizes.size17};
  background-image: none;
  padding-left: ${(props) =>
    props.className === "home" ? `${sizes.size23}` : null};
  background-color: ${colors.white};
  box-shadow: ${(props) =>
    props.className === "home"
      ? `${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0} rgba(0, 0, 0, 0.1)`
      : `${sizes.size0} ${sizes.size5} ${sizes.size10} ${sizes.size0} rgba(0, 0, 0, 0.07)`};
  border-radius: ${sizes.size10};
  border: none;
  outline: none;
`;

const DateBtn = styled.button`
  height: ${(props) => (props.className === "home" ? `${sizes.size54}` : null)};
  width: ${(props) => (props.className === "home" ? `${sizes.size54}` : null)};
  background-color: ${colors.white};
  background-image: url(${timeDateIcon});
  background-repeat: no-repeat;
  background-position: center;
  margin: ${(props) =>
    props.className === "home"
      ? `auto ${sizes.sizen10} auto ${sizes.sizen64}`
      : null};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size6} ${sizes.size0}
    rgba(0, 0, 0, 0.05);
  border: none;
`;
