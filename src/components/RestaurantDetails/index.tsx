import React, { useState } from "react";
import styled from "styled-components";
import Header from "../common/header";
import { colors, sizes, fontFamilies, angles } from "../../variables";
import Searchpath from "../common/Searchpath";
import data from "../common/constants.json";
import BgImg from "../../assets/menu/Bitmap Copy.png";
import RestaurantImg from "../../assets/menu/Resturant Image.png";
import Cutlery from "../../assets/menu/restaurant-cutlery.png";
import TimeIcon from "../../assets/menu/time_icon.png";
import DeliveryRating from "../common/DeliveryRating";
import { NavLink, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Footer from "../common/footer";

const RestaurantDetails = () => {
  const [selected, setSelected] = useState("MENU");
  const handleClick = (e: any) => {
    setSelected(e.target.innerText);
  };
  return (
    <Wrapper>
      <Header></Header>
      <SearchContainer></SearchContainer>
      <MainContainer>
        <Searchpath path={data.searchPath.menu} className="grey-dark" />
        <Image src={BgImg} style={{ width: "100%" }} />
        <ImageContentSection>
          <Image src={RestaurantImg} />
          <CutleryImage src={Cutlery} />
          <RestaurantName>The Boutique Kitchen</RestaurantName>
          <FoodVariety>Indian, Pakistani, Kebab</FoodVariety>
          <FlexRow className="first-row">
            <Rating>4.3</Rating>
            <DetailsList>
              <Detail>63 mins</Detail>
              <Detail>AED30 min order</Detail>
            </DetailsList>
            <Image src={TimeIcon} />
            <Time>11:00 AM - 10:00 PM</Time>
          </FlexRow>
          <RatingTitle>Delivery rating for last 5 orders</RatingTitle>
          <FlexRow>
            {data.ratingList.map((rate, index) => {
              return <DeliveryRating key={index} RatingNum={rate} />;
            })}
          </FlexRow>
          <NavBar>
            {data.NavbarElements.map((navbarElement, index) => {
              return navbarElement === selected ? (
                <NavBarElement key={index} className="select">
                  {navbarElement}
                  <BorderDiv></BorderDiv>
                </NavBarElement>
              ) : (
                <Navlink to={`/${navbarElement.toLowerCase()}`}>
                  <NavBarElement onClick={handleClick}>
                    {navbarElement}
                  </NavBarElement>
                </Navlink>
              );
            })}
          </NavBar>
        </ImageContentSection>
        <RoutingContainer>
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>
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
  background: ${colors.violet1};
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

const Image = styled.img``;

const CutleryImage = styled.img`
  position: absolute;
  top: 20px;
  left: 39px;
`;

const RestaurantName = styled.div`
  position: absolute;
  height: 36px;
  width: 380px;
  color: ${colors.grey20};
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
  color: ${colors.grey8};
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
  background-color: ${colors.green1};
  color: ${colors.white};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size15};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size20};
  text-align: center;
  justify-content: center;
  left: 39px;
`;

const FlexRow = styled.div`
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
  color: ${colors.grey8};
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
  color: ${colors.grey21};
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
  color: ${colors.grey22};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  top: 242px;
  left: 41px;
  padding-bottom: 6px;
  border-bottom: ${sizes.size2} solid ${colors.white3};
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
  color: ${colors.grey23};
  font-family: ${(props) =>
    props.className === "select"
      ? `${fontFamilies.fontFamilyOsBold}`
      : `${fontFamilies.fontFamilyOsSemiBold}`};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
`;

const BorderDiv = styled.div`
  height: 4px;
  width: 38px;
  margin-top: 11px;
  border-radius: 2px;
  background-image: linear-gradient(
    ${angles.angle138_33},
    ${colors.red4} 0%,
    ${colors.yellow5} 100%
  );
  box-shadow: ${sizes.size0} ${sizes.size4} ${sizes.size10} ${sizes.size0}
    ${colors.red2};
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
