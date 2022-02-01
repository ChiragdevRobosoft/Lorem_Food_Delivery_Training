import React from "react";
import styled, { css } from "styled-components";
import { colors, sizes, fontFamilies } from "../../variables";
import Searchpath from "../common/Searchpath";
import data from "../common/constants.json";
import BgImg from "../../assets/restaurantDetails/BgImage.png";
import RestaurantImg from "../../assets/restaurantDetails/Resturant Image.png";
import Cutlery from "../../assets/restaurantDetails/restaurant-cutlery.png";
import TimeIcon from "../../assets/restaurantDetails/time_icon.png";
import DeliveryRating from "../common/DeliveryRating";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import Foodsearch from "../common/SearchComponent";
import Navbar from "../common/Navbar";
import Image from "../common/image";
import Label from "../common/label";
import { queries } from "../common/breakpoints";

const RestaurantDetails = () => {
  const restaurant = JSON.parse(localStorage.getItem("restaurant") || "{}");
  return (
    <Wrapper>
      <Header className="loggedin" />
      <Foodsearch pageType="screen" />
      <MainContainer>
        <Searchpath path={data.searchPath.menu} className="grey-dark" />
        <BgImageContainer>
          <BgImage src={BgImg} />
        </BgImageContainer>
        <ImageContentSection>
          <RestaurantImage src={RestaurantImg} />
          <CutleryImage src={Cutlery} />
          <RestaurantName content={restaurant.name} />
          <FoodVariety content={data.restaurantData.foodVariety} />
          <DetailsContainer className="first-row">
            <Rating content={restaurant.rating} />
            <DetailsList>
              <Detail>{data.restaurantData.time}</Detail>
              <Detail>{data.restaurantData.cost}</Detail>
            </DetailsList>
            <Image src={TimeIcon} />
            <Time content={data.restaurantData.timeRange} />
          </DetailsContainer>
          <RatingTitle content={data.restaurantData.ratingTitle} />
          <DetailsContainer>
            {data.ratingList.map((rate, index) => {
              return <DeliveryRating key={index} RatingNum={rate} />;
            })}
          </DetailsContainer>
        </ImageContentSection>
        <NavbarConatiner>
          <Navbar
            navbarElements={data.NavbarElements}
            navbarType="restaurant-details"
            path={`/${restaurant.name.split(" ").join("-")}`}
          />
        </NavbarConatiner>
        <RoutingContainer>
          <Outlet />
        </RoutingContainer>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const RestaurantImage = styled(Image)`
  ${queries.tabletLandscape} {
    width: 768px;
    height: auto;
  }
  ${queries.tablet} {
    width: 375px;
    height: 150px;
  }
`;

const MainContainer = styled.div`
  width: ${sizes.fullWidth};
  background: ${colors.violet_f1f3fb};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const ImageContentSection = styled.div`
  width: 972px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 83px;
  display: fex;
  flex-direction: column;
  ${queries.tabletLandscape} {
    width: 768px;
    height: auto;
  }
  ${queries.tablet} {
    width: 375px;
    height: 150px;
    top: 63px;
  }
`;

const BgImageContainer = styled.div`
  height: 376px;
  ${queries.tabletLandscape} {
    height: 304px;
  }
  ${queries.tablet} {
    height: 169px;
  }
`;

const BgImage = styled(Image)`
  max-width: 100%;
  height: 267px;
  ${queries.tablet} {
    height: 130px;
  }
`;

const CutleryImage = styled(Image)`
  position: absolute;
  top: 20px;
  left: 39px;
  ${queries.tabletLandscape} {
    width: 60px;
    height: auto;
  }
  ${queries.tablet} {
    width: 30px;
    height: auto;
    left: 10px;
    top: 10px;
  }
`;

const RestaurantName = styled(Label)`
  position: absolute;
  height: 36px;
  color: ${colors.grey_1c1c1c};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size26};
  line-height: ${sizes.size36};
  top: 125px;
  left: 39px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size22};
    line-height: ${sizes.size26};
    height: ${sizes.size26};
    top: 100px;
  }
  ${queries.tablet} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
    left: 10px;
    top: 40px;
  }
`;

const FoodVariety = styled(Label)`
  position: absolute;
  height: 19px;
  color: ${colors.grey_757575_9};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  top: 168px;
  left: 39px;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size12};
    line-height: ${sizes.size14};
    height: ${sizes.size14};
    top: 135px;
  }
  ${queries.tablet} {
    font-size: ${sizes.size9};
    line-height: ${sizes.size11};
    height: ${sizes.size11};
    left: 10px;
    top: 60px;
  }
`;

const Rating = styled(Label)`
  height: 23px;
  width: 42px;
  border-radius: ${sizes.size4};
  background-color: ${colors.green_5fb700};
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size15};
  line-height: ${sizes.size20};
  text-align: center;
  justify-content: center;
  ${queries.tablet} {
    width: 20px;
    height: auto;
    font-size: ${sizes.size9};
    line-height: ${sizes.size11};
  }
`;

const DetailsContainer = styled.div`
  position: absolute;
  height: ${(props) => (props.className === "first-row" ? "23px" : "26px")};
  top: ${(props) => (props.className === "first-row" ? "203px" : "282px")};
  width: ${(props) => (props.className === "first-row" ? "auto" : "297px")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: ${(props) => (props.className === "first-row" ? "39px" : "41px")};
  ${(props) =>
    props.className === "first-row" &&
    css`
      ${queries.tabletLandscape} {
        top: 160px;
      }
      ${queries.tablet} {
        top: 70px;
        left: 10px;
      }
    `};
  ${(props) =>
    props.className !== "first-row" &&
    css`
      ${queries.tabletLandscape} {
        top: 225px;
      }
      ${queries.tablet} {
        top: 120px;
        left: 10px;
        width: 110px;
      }
    `}
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 0;
  margin-left: 20px;
  margin-right: 16px;
  ${queries.tablet} {
    gap: 15px;
  }
`;

const Detail = styled.li`
  height: 17px;
  color: ${colors.grey_757575_9};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  text-indent: -3px;
  ${queries.tablet} {
    font-size: ${sizes.size9};
    line-height: ${sizes.size11};
    height: ${sizes.size11};
    text-indent: -9px;
  }
`;

const Time = styled(Label)`
  height: 17px;
  color: ${colors.grey_7c7c7c};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
  margin-left: 6.5px;
  ${queries.tablet} {
    font-size: ${sizes.size9};
    line-height: ${sizes.size11};
    height: ${sizes.size11};
  }
`;

const RatingTitle = styled(Label)`
  position: absolute;
  width: 297px;
  height: 17px;
  color: ${colors.grey_6a6a6a};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
  top: 242px;
  left: 41px;
  padding-bottom: 6px;
  border-bottom: ${sizes.size2} solid ${colors.white_ededed};
  ${queries.tabletLandscape} {
    top: 190px;
  }
  ${queries.tablet} {
    top: 100px;
    left: 10px;
    font-size: ${sizes.size9};
    line-height: ${sizes.size12};
    height: ${sizes.size12};
  }
`;

const NavbarConatiner = styled.div`
  width: 972px;
  margin: 37px auto 11px auto;
  ${queries.tabletLandscape} {
    width: 768px;
  }
  ${queries.tablet} {
    width: 375px;
  }
`;

const RoutingContainer = styled.div`
  width: 972px;
  margin: auto;
  ${queries.tabletLandscape} {
    width: 768px;
  }
  ${queries.tablet} {
    width: 375px;
  }
`;

export default RestaurantDetails;
