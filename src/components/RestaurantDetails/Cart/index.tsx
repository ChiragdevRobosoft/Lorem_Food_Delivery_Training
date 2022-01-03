import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "../../../assets/menu/my_order_plus_active.png";
import MinusIcon from "../../../assets/menu/my_order_minus_inactive.png";
import vegIcon from "../../../assets/menu/icon_veg.png";
import nonvegIcon from "../../../assets/menu/icn_nonveg.png";
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
          return (
            <CartCard>
              <FoodName>
                <VegIcon src={item.veg ? vegIcon : nonvegIcon} />
                {item.foodName}
              </FoodName>
              <QuantitySelector>
                <Image src={MinusIcon} />
                <Quantity>2</Quantity>
                <Image src={PlusIcon} />
              </QuantitySelector>
              <UnitCost>{item.cost}</UnitCost>
              <ItemsCost>
                AED
                {+parseFloat(item.cost.slice(3)).toFixed(2) * item.quantity}
              </ItemsCost>
              {item.quantity === 1 ? (
                <SelectedQuantity>Quantity : 1</SelectedQuantity>
              ) : null}
              {item.addOn ? <AddOn>{item.addOn}</AddOn> : null}
              <RowFlex>
                {item.customizable ? (
                  <Customize>
                    Customize
                    <ArrowIcon src={DownArrow} />
                  </Customize>
                ) : (
                  <span></span>
                )}
                <Remove>Remove</Remove>
              </RowFlex>
            </CartCard>
          );
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
  border-bottom: ${sizes.size1} solid ${colors.yellow5};
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

const ItemList = styled.div`
  padding: 0px 21px;
  border-bottom: ${sizes.size1} solid ${colors.white3};
`;

const CartCard = styled.div`
  padding: 13px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: ${sizes.size1} solid ${colors.white3};
`;

const FoodName = styled.div`
  height: 19px;
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
`;

const QuantitySelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  height: 30px;
  width: 87px;
  border: ${sizes.size1} solid ${colors.blue2};
  border-radius: ${sizes.size15};
  background-color: ${colors.white};
  padding: 0 10px;
  position: absolute;
  right: 0;
  top: 13px;
`;

const VegIcon = styled.img`
  margin-right: 7px;
`;

const Image = styled.img`
  object-fit: none;
  width: 12.0156px;
`;

const Quantity = styled.div`
  height: 27px;
  width: 30px;
  color: ${colors.orange7};
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size13};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27};
  text-align: center;
`;

const UnitCost = styled.div`
  height: 27px;
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size27};
`;

const ItemsCost = styled.div`
  height: 17px;
  width: 55px;
  color: ${colors.grey9};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size12};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size17};
  text-align: center;
  position: absolute;
  top: 48px;
  right: 0;
  text-align: right;
`;

const AddOn = styled.div`
  height: 30px;
  width: 183px;
  color: ${colors.grey19};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8%;
`;

const Customize = styled.div`
  height: 15px;
  color: ${colors.yellow4};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
  object-fit: none;
`;

const Remove = styled.div`
  height: 15px;
  width: 43px;
  color: ${colors.red3};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
  text-align: right;
  position: absolute;
  right: ${sizes.size0};
`;

const SelectedQuantity = styled.div`
  height: 15px;
  color: ${colors.grey19};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size11};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size15};
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
