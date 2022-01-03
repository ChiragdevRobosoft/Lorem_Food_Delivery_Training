import React, { useState } from "react";
import styled from "styled-components";
import CartCard from "../../common/CartCard";
import DownArrow from "../../../assets/menu/collapse button.png";
import { fontFamilies, sizes, colors } from "../../../variables";

const Cart = () => {
  const cartItems = [
    {
      foodName: "Chili Cheese Meal",
      image: true,
      bestseller: true,
      veg: false,
      cost: "AED27.00",
      addOn: "Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon",
      customizable: true,
      description:
        "Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.",
      alreadyInCart: true,
      quantity: 2,
    },
    {
      foodName: "Canapes and Crostini",
      image: false,
      bestseller: false,
      veg: true,
      cost: "AED27.00",
      customizable: false,
      description: "Clams, mussels, calamari & shrimp w/ white wine & garlic",
      alreadyInCart: true,
      quantity: 2,
    },
    {
      foodName: "Chicken Tortilla",
      image: true,
      bestseller: true,
      veg: false,
      cost: "AED27.00",
      customizable: true,
      description:
        "Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.",
      alreadyInCart: true,
      quantity: 1,
    },
  ];
  return (
    <Wrapper>
      <TitleFlex>
        <MainTitle>My Order</MainTitle>
        <ClearCart>Clear cart</ClearCart>
      </TitleFlex>
      <ItemList>
        {cartItems.map((item, index) => {
          return <CartCard item={item} />;
        })}
      </ItemList>
      <TotalCostContainer>
        <PayText>To Pay</PayText>
        <TotalCost>AED85.76</TotalCost>
        <ArrowIcon src={DownArrow} />
      </TotalCostContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 816px;
  width: 305px;
  border-radius: ${sizes.size6};
  background-color: ${colors.white};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.black1};
`;

const TitleFlex = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  border-bottom: ${sizes.size1} solid ${colors.white3};
`;

const ItemList = styled.div`
  padding: 0px 21px;
  border-bottom: ${sizes.size1} solid ${colors.white3};
`;

const MainTitle = styled.div`
  height: 30px;
  width: 101px;
  color: ${colors.black2};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size22};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size30};
`;

const ClearCart = styled.div`
  height: 19px;
  width: 66px;
  color: ${colors.orange2};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
  text-align: right;
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
  object-fit: none;
`;

const TotalCostContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 28px;
  height: 61px;
  border-radius: ${sizes.size3};
  background-color: ${colors.white};
  box-shadow: ${sizes.size0} ${sizes.size2} ${sizes.size10} ${sizes.size0}
    ${colors.grey24};
  margin-left: 21px;
  margin-right: 21px;
  align-items: center;
`;

const PayText = styled.div`
  height: 22px;
  width: 54px;
  color: ${colors.blue1};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  margin-left: 10px;
  margin-right: 86px;
`;

const TotalCost = styled.div`
  height: 22px;
  width: 73px;
  color: ${colors.blue1};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
  text-align: right;
`;

export default Cart;
