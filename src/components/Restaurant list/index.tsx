import React from "react";
import styled from "styled-components";
import Header from "../common/header";

const RestaurantList = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100wh;
`;

export default RestaurantList;
