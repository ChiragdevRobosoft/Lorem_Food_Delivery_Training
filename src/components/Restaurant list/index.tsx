import React from "react";
import styled from "styled-components";
import Header from "../common/header";
import Dropdown from "../common/Dropdown";
import ArrowUp from "../../assets/restaurantList/long-arrow-pointing-up.png";
import ArrowDown from "../../assets/restaurantList/long-arrow-pointing-down.png";
import Filters from "./Filters";
import data from "../common/constants.json";
import RestaurantCard from "../common/restaurantCard";
import BrandsCard from "./BrandsCard";
import Footer from "../common/footer";
import RightArrow from "../../assets/restaurantList/right_arrow.png";
import { Link } from "react-router-dom";
import { colors, sizes, fontFamilies, links } from "../../variables";
import Searchpath from "../common/Searchpath";

const RestaurantList = () => {
  return (
    <Wrapper>
      <Header />
      <SearchContainer></SearchContainer>
      <MainContainer>
        <Searchpath
          path={data.searchPath.greatBreakfasts}
          className="grey-light"
        />
        <HeadingSection>
          <Title>Breakfast in Dubai</Title>
          <FilterRow>
            <FilterType>List by :</FilterType>
            <Dropdown
              name="List by"
              options={[
                { content: "All", image: null },
                { content: "Near by", image: null },
              ]}
            />
            <FilterType>Sort by :</FilterType>
            <Dropdown
              name="Sort by"
              options={[
                { content: "Rating", image: ArrowUp },
                { content: "Rating", image: ArrowDown },
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
                    <Brands>Brands Nearby</Brands>
                    <MoreOption to={links.brands}>
                      More
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

const SearchContainer = styled.div`
  height: 133px;
`;

const MainContainer = styled.div`
  width: 100wh;
  background: ${colors.violet1};
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
  color: ${colors.grey16};
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
  color: ${colors.grey17};
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
  color: ${colors.grey18};
  font-family: ${fontFamilies.fontFamilyOs};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.sizeNeg0_27};
  line-height: ${sizes.size22};
`;

const MoreOption = styled(Link)`
  height: 22px;
  color: ${colors.orange2};
  font-family: ${fontFamilies.fontFamilyOs};
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
