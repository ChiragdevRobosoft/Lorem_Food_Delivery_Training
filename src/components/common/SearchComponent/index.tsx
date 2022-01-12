import styled from "styled-components";
import { FC } from "react";
import { colors, fontFamilies, fontWeight, sizes } from "../../../variables";
import SearchBoxComp from "../searchBox";
import LocationInput from "../locationInput";
import DateInput from "../dateInput";
import searchBoxBg from "./../../..//assets/common/foodSearchBox/searchbox_bg.png";
import data from "./../constants.json";
interface foodSearchProps {
  pageType: string;
}

const Foodsearch: FC<foodSearchProps> = ({ pageType }) => {
  return (
    <>
      {pageType === "home" ? (
        <WrapperHome className={pageType}>
          <SearchBoxComp className={pageType} />
          <LocAndDate className={pageType}>
            <Locationholder className={pageType}>
              <LocationInput className={pageType} />
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
              <DateInput className={pageType} />
            </SearchContainer>
          </ContentContainer>
        </Wrapper>
      )}
    </>
  );
};
export default Foodsearch;

const WrapperHome = styled.div`
  margin: ${(props) =>
    props.className === "home" ? `0 889px 176px 420px;` : null}
  height: ${(props) => (props.className === "home" ? `175px` : null)};
  width: ${(props) => (props.className === "home" ? `611px` : null)};
  display: flex;
  flex-direction: column;
`;

const LocAndDate = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.className === "home" ? `611px` : null)};
  height: ${(props) => (props.className === "home" ? `70px` : null)};
  margin: ${(props) => (props.className === "home" ? `35px 0 0 0` : ``)};
  display: flex;
  flex-direction: row;
`;

const Locationholder = styled.div`
  height: ${(props) => (props.className === "home" ? `70px` : `50px`)};
  width: ${(props) => (props.className === "home" ? `338px` : `283px`)};
  margin: ${(props) => (props.className === "home" ? `0 22px 0 4px` : null)};
`;

const Dateholder = styled.div`
  height: ${(props) => (props.className === "home" ? `70px` : null)};
  width: ${(props) => (props.className === "home" ? `247px` : null)};
  margin: ${(props) => (props.className === "home" ? `0` : null)};
  display: flex;
`;

const Wrapper = styled.div`
  margin: 0px;
  height: 134px;
  width: 100%;
  background-image: url(${searchBoxBg});
  align-items: center;
`;

const ContentContainer = styled.div`
  margin: 23px auto 35px auto;
  height: 76px;
  width: 961px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
}
`;

const SearchContainer = styled.div`
  margin: auto;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
