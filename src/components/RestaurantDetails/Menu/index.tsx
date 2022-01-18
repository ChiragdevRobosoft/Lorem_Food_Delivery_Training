import React, { useState } from "react";
import styled from "styled-components";
import FoodCard from "../../common/FoodCard";
import SearchIcon from "../../../assets/restaurantDetails/icon_search.png";
import data from "../../common/constants.json";
import Cart from "../Cart";
import { fontFamilies, colors, sizes, opacity } from "../../../variables";
import { foodItemProps, foodcardDetailsProps } from "../../common/interfaces";

const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <Wrapper>
      <MenuSection>
        <Searchbar
          type="search"
          placeholder="Search an Item"
          onChange={handleChange}
        />
        {Object.keys(data.foodcardDetails).map((foodType, index) => {
          return (
            <React.Fragment key={index}>
              {searchValue === "" ? (
                <FoodCardTitle>
                  {foodType.charAt(0).toUpperCase() + foodType.slice(1)} (
                  {
                    (data.foodcardDetails as foodcardDetailsProps)[foodType]
                      .length
                  }
                  )
                </FoodCardTitle>
              ) : null}

              {(data.foodcardDetails as foodcardDetailsProps)[foodType].map(
                (foodItem: foodItemProps, index: number) => {
                  if (
                    foodItem.foodName
                      .toUpperCase()
                      .includes(searchValue.toUpperCase())
                  ) {
                    return <FoodCard cardDetails={foodItem} key={index} />;
                  }
                }
              )}
            </React.Fragment>
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
  padding-bottom: 76px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

const Searchbar = styled.input`
  height: 50px;
  width: 633px;
  border-radius: ${sizes.size4};
  border: none;
  background-color: ${colors.white_ffffff};
  background-size: 17px 20px;
  box-shadow: ${sizes.size0} ${sizes.size5} ${sizes.size10} ${sizes.size0}
    ${colors.black_000000_07};
  outline: none;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 23.76px center;
  padding-left: 58px;
  ::placeholder {
    height: 19px;
    opacity: ${opacity.opacity0_44};
    color: ${colors.grey_4a4a4a};
    font-family: ${fontFamilies.fontFamilyOsSemiBold};
    font-size: ${sizes.size14};
    letter-spacing: ${sizes.size0};
    line-height: ${sizes.size19};
  }
`;

const MenuSection = styled.div``;

const FoodCardTitle = styled.div`
  height: 22px;
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.sizeNeg0_27};
  line-height: ${sizes.size22};
  margin-bottom: 14px;
  margin-top: 25px;
`;
export default Menu;
