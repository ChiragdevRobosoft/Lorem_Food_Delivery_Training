import React from "react";
import styled from "styled-components";
import FoodCard from "../../common/FoodCard";
import SearchIcon from "../../../assets/menu/icn_search_home copy.png";
import data from "../../common/constants.json";
import Cart from "../Cart";
import { fontFamilies, colors, sizes, opacity } from "../../../variables";

const Menu = () => {
  return (
    <Wrapper>
      <MenuSection>
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
      </MenuSection>
      <Cart />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 972px;
  position: relative;
  padding-bottom: 323px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Searchbar = styled.input`
  height: 50px;
  width: 633px;
  border-radius: ${sizes.size4};
  border: none;
  background-color: ${colors.white};
  background-size: 17px 20px;
  box-shadow: ${sizes.size0} ${sizes.size5} ${sizes.size10} ${sizes.size0}
    ${colors.black3};
  outline: none;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 23.76px center;
  padding-left: 58px;
  ::placeholder {
    height: 19px;
    opacity: ${opacity.opacity0_44};
    color: ${colors.grey18};
    font-family: ${fontFamilies.fontFamilyOsSemiBold};
    font-size: ${sizes.size14};
    letter-spacing: ${sizes.size0};
    line-height: ${sizes.size19};
  }
`;

const MenuSection = styled.div``;

const FoodCardTitle = styled.div`
  height: 22px;
  color: ${colors.grey18};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.sizeNeg0_27};
  line-height: ${sizes.size22};
  margin-bottom: 14px;
  margin-top: 25px;
`;
export default Menu;
