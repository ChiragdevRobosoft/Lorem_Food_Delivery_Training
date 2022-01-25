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

const RestaurantList = () => {
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
              options={[
                {
                  content: `${data.dropdownData.sort.content[0]}`,
                  image: ArrowUp,
                },
                {
                  content: `${data.dropdownData.sort.content[1]}`,
                  image: ArrowDown,
                },
              ]}
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
        <Footer />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100wh;
`;

const MainContainer = styled.div`
  width: 100wh;
  background: ${colors.violet_f1f3fb};
  margin-left: auto;
  margin-right: auto;
`;

const HeadingSection = styled.div`
  width: 959.42px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  height: 34px;
  width: 224px;
  color: ${colors.grey_636364};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size25};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size34};
  margin-top: 16px;
`;

const FilterRow = styled.div`
  text-align: right;
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
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 1140px;
  width: 959.42px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24.07px;
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
`;

const RightArrowImg = styled.img`
  margin-left: 7px;
`;

export default RestaurantList;
