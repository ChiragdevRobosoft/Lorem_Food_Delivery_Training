import styled from "styled-components";
import { colors } from "../../variables";
import Searchpath from "../common/Searchpath";
import data from "../common/constants.json";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import Foodsearch from "../common/SearchComponent";

const Cart = () => {
  return (
    <Wrapper>
      <Header className="loggedin" />
      <Foodsearch pageType="screen" />
      <Searchpath path={data.searchPath.menu1} className="grey-dark" />
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

// const PageSection = styled.div`
//   height: 100vh;
//   width: 100%;
// `;
