import React from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies, angles } from "../../variables";
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

const RestaurantDetails = () => {
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
          <Icon src={RestaurantImg} />
          <CutleryImage src={Cutlery} />
          <RestaurantName>{data.restaurantData.name}</RestaurantName>
          <FoodVariety>{data.restaurantData.foodVariety}</FoodVariety>
          <DetailsContainer className="first-row">
            <Rating>{data.restaurantData.rating}</Rating>
            <DetailsList>
              <Detail>{data.restaurantData.time}</Detail>
              <Detail>{data.restaurantData.cost}</Detail>
            </DetailsList>
            <Icon src={TimeIcon} />
            <Time>{data.restaurantData.timeRange}</Time>
          </DetailsContainer>
          <RatingTitle>{data.restaurantData.ratingTitle}</RatingTitle>
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
`;

const Icon = styled.img``;

const BgImageContainer = styled.div`
  height: 376px;
`;

const BgImage = styled.img`
  width: 100%;
`;

const CutleryImage = styled.img`
  position: absolute;
  top: 20px;
  left: 39px;
`;

const RestaurantName = styled.div`
  position: absolute;
  height: 36px;
  width: 380px;
  color: ${colors.grey_1c1c1c};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size26};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size36};
  top: 125px;
  left: 39px;
`;

const FoodVariety = styled.div`
  position: absolute;
  height: 19px;
  color: ${colors.grey_757575_9};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  top: 168px;
  left: 39px;
`;

const Rating = styled.span`
  position: absolute;
  height: 23px;
  width: 42px;
  border-radius: ${sizes.size4};
  background-color: ${colors.green_5fb700};
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size15};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size20};
  text-align: center;
  justify-content: center;
  left: 39px;
`;

const DetailsContainer = styled.div`
  position: absolute;
  height: ${(props) => (props.className === "first-row" ? "23px" : "26px")};
  top: ${(props) => (props.className === "first-row" ? "203px" : "282px")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: ${(props) => (props.className === "first-row" ? "0px" : "41px")}; ;
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 17px;
  color: ${colors.grey_757575_9};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  gap: 25px;
  padding: 0;
  margin-left: 111px;
  margin-right: 16px;
`;

const Detail = styled.li`
  text-indent: -3px;
`;

const Time = styled.div`
  height: 17px;
  color: ${colors.grey_7c7c7c};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  margin-left: 6.5px;
`;

const RatingTitle = styled.div`
  position: absolute;
  width: 297px;
  height: 17px;
  color: ${colors.grey_6a6a6a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  top: 242px;
  left: 41px;
  padding-bottom: 6px;
  border-bottom: ${sizes.size2} solid ${colors.white_ededed};
`;

const NavbarConatiner = styled.div`
  width: 972px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 37px;
  margin-bottom: 11px;
`;

const RoutingContainer = styled.div`
  width: 516px;
  position: relative;
  margin: auto;
`;

export default RestaurantDetails;
