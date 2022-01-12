import React, { useState } from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies, angles } from "../../variables";
import Searchpath from "../common/Searchpath";
import data from "../common/constants.json";
import BgImg from "../../assets/restaurantDetails/BgImage.png";
import RestaurantImg from "../../assets/restaurantDetails/Resturant Image.png";
import Cutlery from "../../assets/restaurantDetails/restaurant-cutlery.png";
import TimeIcon from "../../assets/restaurantDetails/time_icon.png";
import DeliveryRating from "../common/DeliveryRating";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import Foodsearch from "../common/SearchComponent";

const RestaurantDetails = () => {
  const [selected, setSelected] = useState(data.NavbarElements[0]);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setSelected((e.target as HTMLElement).innerText);
  };
  return (
    <Wrapper>
      <Header className="loggedin" />
      <Foodsearch pageType="screen" />
      <MainContainer>
        <Searchpath path={data.searchPath.menu} className="grey-dark" />
        <BgImage src={BgImg} />
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
          <NavBar>
            {data.NavbarElements.map((navbarElement, index) => {
              return navbarElement === selected ? (
                <Navlink to={`${navbarElement.toLowerCase()}`} key={index}>
                  <NavBarElement className="select">
                    {navbarElement}
                    <Underline></Underline>
                  </NavBarElement>
                </Navlink>
              ) : (
                <Navlink to={`${navbarElement.toLowerCase()}`} key={index}>
                  <NavBarElement onClick={handleClick}>
                    {navbarElement}
                  </NavBarElement>
                </Navlink>
              );
            })}
          </NavBar>
        </ImageContentSection>
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

const SearchContainer = styled.div`
  height: 133px;
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

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  margin-top: 37px;
  margin-bottom: 20px;
`;

const NavBarElement = styled.li`
  margin-right: 60px;
  list-style: none;
  height: 19px;
  color: ${colors.grey_1f1f1f};
  font-family: ${(props) =>
    props.className === "select"
      ? `${fontFamilies.fontFamilyOsBold}`
      : `${fontFamilies.fontFamilyOsSemiBold}`};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
`;

const Underline = styled.div`
  height: 4px;
  width: 38px;
  margin-top: 11px;
  border-radius: 2px;
  background-image: linear-gradient(
    ${angles.angle138_33},
    ${colors.red_f3698e} 0%,
    ${colors.yellow_feb456} 100%
  );
  box-shadow: ${sizes.size0} ${sizes.size4} ${sizes.size10} ${sizes.size0}
    ${colors.red_f67e7e_38};
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
`;

const RoutingContainer = styled.div`
  width: 972px;
  position: relative;
  margin: auto;
  top: 211px;
`;

export default RestaurantDetails;
