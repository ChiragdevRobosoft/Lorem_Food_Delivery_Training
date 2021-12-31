import React from "react";
import styled from "styled-components";
import FoodCard from "../../common/FoodCard";
import SearchIcon from "../../../assets/menu/icn_search_home copy.png";
import data from "../../common/constants.json";
import { fdatasync } from "fs";

const Menu = () => {
  console.log(data.foodcardDetails.appetizers.length);
  return (
    <Wrapper>
      <Searchbar type="search" placeholder="Search an Item" />
      {Object.keys(data.foodcardDetails).map((a, index) => {
        return (
          <>
            <FoodCardTitle>
              {a.charAt(0).toUpperCase() + a.slice(1)} (
              {(data.foodcardDetails as any)[a].length})
            </FoodCardTitle>
            {(data.foodcardDetails as any)[a].map((b: any, index: any) => {
              return <FoodCard cardDetails={b} />;
            })}
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 972px;
  position: relative;
`;

const Searchbar = styled.input`
  height: 50px;
  width: 633px;
  border-radius: 4px;
  border: none;
  background-color: #ffffff;
  background-size: 17px 20px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.07);
  outline: none;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 23.76px center;
  padding-left: 58px;
  ::placeholder {
    height: 19px;
    opacity: 0.44;
    color: #4a4a4a;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 19px;
  }
`;

const FoodCardTitle = styled.div`
  height: 22px;
  color: #4a4a4a;
  font-family: "Open Sans";
  font-size: 16px;
  letter-spacing: -0.27px;
  line-height: 22px;
  margin-bottom: 14px;
  margin-top: 25px;
`;
export default Menu;
