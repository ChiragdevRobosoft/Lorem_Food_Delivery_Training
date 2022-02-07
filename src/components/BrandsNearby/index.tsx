import React from "react";
import styled from "styled-components";
import Header from "../common/header";
import FoodSearch from "../common/SearchComponent";
import { sizes, colors, fontFamilies } from "../../variables";
import Searchpath from "../common/Searchpath";
import data from "../common/constants.json";
import Label from "../common/label";
import { queries } from "../common/breakpoints";
import BrandsNearbyCard from "../common/brandsNearbyCard";
import Footer from "../common/footer";

const BrandsNearby = () => {
  return (
    <Wrapper>
      <Header className="loggedin" />
      <FoodSearch pageType="screen" />
      <MainContainer>
        <Searchpath className="dark-grey" path={data.searchPath.allBrands} />
        <ContentSection>
          <Title content={data.restaurantListPage.brandsNearBy} />
          {data.brandsNearby.map((brands, index) => {
            return <BrandsNearbyCard cardItem={brands} />;
          })}
        </ContentSection>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const MainContainer = styled.div`
  width: ${sizes.fullWidth};
  background: ${colors.violet_f1f3fb};
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: 121px;
`;

const ContentSection = styled.div`
  width: 964px;
  margin: auto;
  ${queries.tabletLandscape} {
    width: 768px;
  }
  ${queries.tablet} {
    width: 375px;
  }
`;

const Title = styled(Label)`
  display: inline-block;
  height: ${sizes.size34};
  color: ${colors.grey_636364};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size25};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size34};
  margin-top: 20px;
  margin-bottom: 23px;
`;

export default BrandsNearby;
