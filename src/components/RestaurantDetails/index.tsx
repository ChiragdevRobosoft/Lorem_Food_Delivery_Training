import React, { useState } from "react";
import styled from "styled-components";
import Header from "../common/header";
import { colors, sizes, fontFamilies } from "../../variables";
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
  const elements = ["MENU", "OVERVIEW", "REVIEWS & RATINGS", "GALLERY"];
  return (
    <Wrapper>
      <Header></Header>
      <SearchContainer></SearchContainer>
      <MainContainer>
        <Searchpath path={data.searchPath.menu} className="grey-dark" />
        <Image src={BgImg} />
        <ContentSection>
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
            {elements.map((a, index) => {
              return a === selected ? (
                <NavBarElement key={index} className="select">
                  {a}
                  <BorderDiv></BorderDiv>
                </NavBarElement>
              ) : (
                <Navlink to={`/${a.toLowerCase()}`}>
                  <NavBarElement onClick={handleClick}>{a}</NavBarElement>
                </Navlink>
              );
            })}
          </NavBar>
          <Routes>
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </ContentSection>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
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
  position: relative;
`;

const ContentSection = styled.div`
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
  color: #1c1c1c;
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: 26px;
  letter-spacing: 0;
  line-height: 36px;
  top: 125px;
  left: 39px;
`;

const FoodVariety = styled.div`
  position: absolute;
  height: 19px;
  color: #757575;
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
  top: 168px;
  left: 39px;
`;

const Rating = styled.span`
  position: absolute;
  height: 23px;
  width: 42px;
  border-radius: 4px;
  background-color: #5fb700;
  color: #ffffff;
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: 15px;
  letter-spacing: 0;
  line-height: 20px;
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
  color: #757575;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 17px;
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
  color: #7c7c7c;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 17px;
  margin-left: 6.5px;
`;

const RatingTitle = styled.div`
  position: absolute;
  width: 297px;
  height: 17px;
  color: #6a6a6a;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 17px;
  top: 242px;
  left: 41px;
  padding-bottom: 6px;
  border-bottom: 2px solid #ededed;
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
  color: #1f1f1f;
  font-family: ${(props) =>
    props.className === "select"
      ? `${fontFamilies.fontFamilyOsBold}`
      : `${fontFamilies.fontFamilyOsSemiBold}`};
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
`;

const BorderDiv = styled.div`
  height: 4px;
  width: 38px;
  margin-top: 11px;
  border-radius: 2px;
  background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
  box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
`;
const Navlink = styled(NavLink)`
  text-decoration: none;
`;

export default RestaurantDetails;
