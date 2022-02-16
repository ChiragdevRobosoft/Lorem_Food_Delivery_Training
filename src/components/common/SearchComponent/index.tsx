import styled from "styled-components";
import { FC, useState } from "react";
import { colors, fontFamilies, fontWeight, sizes } from "../../../variables";
import SearchBoxComp from "../searchBox";
import LocationInput from "../locationInput";
import DateInput from "../dateInput";
import searchBoxBg from "./../../..//assets/common/foodSearchBox/searchbox_bg.png";
import data from "./../constants.json";
import { queries } from "../breakpoints";
import timeDateIcon from "./../../../assets/common/foodSearchBox/present-t&d-firstpage.png";
import Image from "../image";
import Schedule from "../../RestaurantDetails/Schedule";
interface foodSearchProps {
  pageType: string;
}

const FoodSearch: FC<foodSearchProps> = ({ pageType }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const [searchVal, setSearchVal] = useState("");
  const [locationVal, setLocationVal] = useState("");
  return (
    <>
      {pageType === "home" ? (
        <WrapperHome className={pageType}>
          <SearchBoxComp
            className={pageType}
            searchVal={searchVal}
            locationVal={locationVal}
            setSearchVal={setSearchVal}
          />
          <LocAndDate className={pageType}>
            <Locationholder className={pageType}>
              <LocationInput
                className={pageType}
                locationVal={locationVal}
                setLocationVal={setLocationVal}
              />
            </Locationholder>
            <Dateholder className={pageType}>
              <DateInput className={pageType} />
            </Dateholder>
          </LocAndDate>
        </WrapperHome>
      ) : (
        <Wrapper>
          <ContentContainer>
            <DeliveryAsap>{data.foodSearchBox.delivery}</DeliveryAsap>
            <SearchContainer>
              <LocationInput className={pageType} />
              <SearchBoxComp className={pageType} />
              <DatePickerImage src={timeDateIcon} onClick={handleClose} />
            </SearchContainer>
          </ContentContainer>
          <Schedule open={open} handleClose={handleClose} setOpen={setOpen} />
        </Wrapper>
      )}
    </>
  );
};
export default FoodSearch;

const WrapperHome = styled.div`
  margin: ${(props) => (props.className === "home" ? `0 auto 0 0;` : null)}
  width: ${(props) => (props.className === "home" ? `611px` : null)};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${queries.tablet} {
    width: ${(props) => (props.className === "home" ? `100%` : null)};
  }
`;

const LocAndDate = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : null)};
  margin: ${(props) => (props.className === "home" ? `35px 0 0 0` : ``)};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${queries.tablet} {
    margin: 21px 0 0 0;
  }
  ${queries.smallMobile} {
    margin: 11px 0 0 0;
  }
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
  ${queries.tablet} {
    width: ${(props) =>
      props.className === "home" ? `${sizes.size338}` : `${sizes.size283}`};
  }
  ${queries.smallMobile} {
    width: ${(props) =>
      props.className === "home" ? `${sizes.size338}` : `${sizes.size283}`};
  }
`;

const Dateholder = styled.div`
  height: ${(props) => (props.className === "home" ? `${sizes.size70}` : null)};
  width: ${(props) => (props.className === "home" ? `${sizes.size247}` : null)};
  margin: ${(props) => (props.className === "home" ? `${sizes.size0}` : null)};
  display: flex;
  ${queries.tablet} {
    margin-top: ${(props) => (props.className === "home" ? `5px` : null)};
  }
  ${queries.smallMobile} {
    margin-top: ${(props) => (props.className === "home" ? `2px` : null)};
  }
`;

const Wrapper = styled.div`
  margin: 0px;
  height: 134px;
  width: 100%;
  background-image: url(${searchBoxBg});
  align-items: center;
  ${queries.tabletLandscape} {
    height: auto;
  }
`;

const ContentContainer = styled.div`
  margin: 0px auto 0px auto;
  padding-top: 23px;
  padding-bottom: 35px;
  height: 76px;
  width: 961px;
  display: flex;
  flex-direction: column;
  ${queries.tabletLandscape} {
    height: auto;
    width: auto;
  }
`;

const DeliveryAsap = styled.p`
height: 17px;
  width: 78px;
  color: ${colors.grey_636364};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  font-weight: ${fontWeight.weight600};
  letter-spacing: -0.2px;
  line-height: ${sizes.size17};
  padding:0;
  margin: 0 0 9px 2px;
  ${queries.tablet} {
  font-size: ${sizes.size11};
  line-height: ${sizes.size14};
  height: ${sizes.size14};
  }
}
`;

const SearchContainer = styled.div`
  margin: auto;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  column-gap: 5px;
  row-gap: 5px;
  justify-content: space-around;
  ${queries.tabletLandscape} {
    width: auto;
    height: auto;
    flex-wrap: wrap;
  }
`;

const DatePickerImage = styled(Image)`
  height: 60px;
  width: 60px;
`;
