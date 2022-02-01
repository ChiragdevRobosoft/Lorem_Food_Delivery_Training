import React, { useState } from "react";
import styled from "styled-components";
import FoodCard from "../../common/FoodCard";
import SearchIcon from "../../../assets/restaurantDetails/icon_search.png";
import data from "../../common/constants.json";
import { fontFamilies, colors, sizes, opacity } from "../../../variables";
import { orderCardProps } from "../../common/interfaces";
import OrderCard from "../../common/orderCard";
import Dropdown from "../../common/Dropdown";
import { queries } from "../../common/breakpoints";

const Orders = () => {
  return (
    <Wrapper>
      <Dropdown
        name="OrderDropdown"
        className="semibold"
        arrow={true}
        options={data.orderDropdownData.contents.map((content) => {
          return { content: content, image: null };
        })}
      />
      <OrdersContainer>
        {data.orderCardData.map((item: orderCardProps, index: number) => {
          return <OrderCard cardDetails={item} key={index} />;
        })}
      </OrdersContainer>
    </Wrapper>
  );
};
export default Orders;

const Wrapper = styled.div`
  width: 958px;
  position: relative;
  padding-bottom: 76px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 84px;
  ${queries.tabletLandscape} {
    width: 469px;
  }
`;
const OrdersContainer = styled.div`
  width: 958px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 10px;
  ${queries.tabletLandscape} {
    flex-flow: column wrap;
  }
`;
