import React from "react";
import styled from "styled-components";
import Dropdown from "../common/Dropdown";
import ArrowUp from "../../assets/common/dropdown/long-arrow-pointing-up.png";
import ArrowDown from "../../assets/common/dropdown/long-arrow-pointing-down.png";
import Filters from "./Filters";
import data from "../common/constants.json";
import RestaurantCard from "../common/restaurantCard";
import BrandsCard from "./BrandsCard";
import Footer from "../common/footer";
import RightArrow from "../../assets/restaurantList/right_arrow.png";
import { Link } from "react-router-dom";
import { colors, sizes, fontFamilies, links } from "../../variables";
import Searchpath from "../common/Searchpath";
import Header from "../common/header";
import FoodSearch from "../common/SearchComponent";
import { queries } from "../common/breakpoints";

const RestaurantList = () => {
  const images = [ArrowUp, ArrowDown];
  return (
    <Wrapper>
      <Header className="loggedin" />
      <FoodSearch pageType="screen" />
      <MainContainer>
        <Searchpath
          path={data.searchPath.greatBreakfasts}
          className="grey-light"
        />
        <HeadingSection>
          <Title>{data.restaurantListPage.title}</Title>
          <FilterRow>
            <FilterType>{data.dropdownData.list.title} :</FilterType>
            <Dropdown
              name={data.dropdownData.list.title}
              options={data.dropdownData.list.contents.map((content) => {
                return { content: content, image: null };
              })}
            />
            <FilterType>{data.dropdownData.sort.title} :</FilterType>
            <Dropdown
              name={data.dropdownData.sort.title}
              options={data.dropdownData.sort.contents.map((content, index) => {
                return { content: content, image: images[index] };
              })}
            />
          </FilterRow>
        </HeadingSection>
        <ContentSection>
          <Filters />
          <RightSection>
            {data.restaurantCardData.map((cardInfo, index) => {
              if ((index + 1) % 4 === 0 && index !== 0) {
                return (
                  <React.Fragment key={index}>
                    <RestaurantCard card={cardInfo} />
                    <Brands>{data.restaurantListPage.brandsNearBy}</Brands>
                    <MoreOption to={links.brands}>
                      {data.restaurantListPage.more}
                      <RightArrowImg src={RightArrow} />
                    </MoreOption>
                    <BrandsCard />
                  </React.Fragment>
                );
              } else {
                return <RestaurantCard card={cardInfo} key={index} />;
              }
            })}
          </RightSection>
        </ContentSection>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  width: 100%;
  background: ${colors.violet_f1f3fb};
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
`;

const HeadingSection = styled.div`
  width: 959.42px;
  margin-left: auto;
  margin-right: auto;
  ${queries.tabletLandscape} {
    width: auto;
    margin: 0;
  }
`;

const Title = styled.div`
  height: 34px;
  color: ${colors.grey_636364};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size25};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size34};
  margin-top: 16px;
  ${queries.tablet} {
    font-size: ${sizes.size22};
    line-height: ${sizes.size28};
    height: ${sizes.size28};
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: auto;
  margin-top: 18px;
  height: 22px;
`;

const FilterType = styled.span`
  height: 22px;
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  margin-left: 40px;
  ${queries.tablet} {
    font-size: ${sizes.size14};
    line-height: ${sizes.size18};
    height: ${sizes.size18};
  }
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-around;
  height: 1140px;
  width: 959.42px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24.07px;
  ${queries.tabletLandscape} {
    width: auto;
    column-gap: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  ${queries.tablet} {
    flex-wrap: wrap;
    row-gap: 10px;
  }
`;

const RightSection = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Brands = styled.span`
  height: 22px;
  width: 108px;
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.sizeNeg0_27};
  line-height: ${sizes.size22};
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const MoreOption = styled(Link)`
  height: 22px;
  color: ${colors.orange_f57c00};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  right: 0;
  text-decoration: none;
  float: right;
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
  }
`;

const RightArrowImg = styled.img`
  margin-left: 7px;
`;

export default RestaurantList;
