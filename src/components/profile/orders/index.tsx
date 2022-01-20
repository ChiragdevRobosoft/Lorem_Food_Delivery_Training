import React, { useState } from "react";
import styled from "styled-components";
import FoodCard from "../../common/FoodCard";
import SearchIcon from "../../../assets/restaurantDetails/icon_search.png";
import data from "../../common/constants.json";
import { fontFamilies, colors, sizes, opacity } from "../../../variables";
import { orderCardProps } from "../../common/interfaces";
import OrderCard from "../../common/orderCard";
import Dropdown from "../../common/Dropdown";

const Orders = () => {
  return (
    <Wrapper>
      <Dropdown
        name={data.orderDropdownData.title}
        options={[
          {
            content: `${data.orderDropdownData.content[0]}`,
            image: null,
          },
          {
            content: `${data.orderDropdownData.content[1]}`,
            image: null,
          },
        ]}
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
`;
const OrdersContainer = styled.div`
  width: 958px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;
`;
