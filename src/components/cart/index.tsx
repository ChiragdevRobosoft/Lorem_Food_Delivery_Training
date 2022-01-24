import styled from "styled-components";
import { colors } from "../../variables";
import { Outlet } from "react-router-dom";
import Header from "../common/header";
import FoodSearch from "../common/SearchComponent";
import Footer from "../common/footer";

const Cart = () => {
  return (
    <Wrapper>
      <Header className="loggedin" />
      <FoodSearch pageType="screen" />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
export default Cart;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: ${colors.violet_f1f3fb};
`;
