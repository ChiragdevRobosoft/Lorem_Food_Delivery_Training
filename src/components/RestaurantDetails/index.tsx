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
import Image from "../common/image";
import Label from "../common/label";

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
          <Image src={RestaurantImg} />
          <CutleryImage src={Cutlery} />
          <RestaurantName content={data.restaurantData.name} />
          <FoodVariety content={data.restaurantData.foodVariety} />
          <DetailsContainer className="first-row">
            <Rating content={data.restaurantData.rating} />
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

const BgImageContainer = styled.div`
  height: 376px;
`;

const BgImage = styled(Image)`
  width: 100%;
`;

const CutleryImage = styled(Image)`
  position: absolute;
  top: 20px;
  left: 39px;
`;

const RestaurantName = styled(Label)`
  position: absolute;
  height: 36px;
  width: 380px;
  color: ${colors.grey_1c1c1c};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size26};
  line-height: ${sizes.size36};
  top: 125px;
  left: 39px;
`;

const FoodVariety = styled(Label)`
  position: absolute;
  height: 19px;
  color: ${colors.grey_757575_9};
  font-size: ${sizes.size14};
  line-height: ${sizes.size19};
  top: 168px;
  left: 39px;
`;

const Rating = styled(Label)`
  position: absolute;
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
  left: 39px;
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
  left: ${(props) => (props.className === "first-row" ? "0px" : "41px")}; ;
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 17px;
  gap: 25px;
  padding: 0;
  margin-left: 111px;
  margin-right: 16px;
`;

const Detail = styled.li`
  color: ${colors.grey_757575_9};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  text-indent: -3px;
`;

const Time = styled(Label)`
  height: 17px;
  color: ${colors.grey_7c7c7c};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  line-height: ${sizes.size17};
  margin-left: 6.5px;
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
`;

const NavbarConatiner = styled.div`
  width: 972px;
  margin: 37px auto 11px auto;
`;

const RoutingContainer = styled.div`
  width: 972px;
  margin: auto;
`;

export default RestaurantDetails;
