import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import RestaurantDetails from "../components/RestaurantDetails";
import CartDataProvider from "../components/common/CartDataProvider";
import Menu from "../components/RestaurantDetails/Menu";
import Overview from "../components/RestaurantDetails/Overview";
import { links } from "../variables";
import Cart from "../components/cart";
import CartItems from "../components/cart/cart-items";
import OrderCard from "../components/common/orderCard";
import ProceedPayment from "../components/cart/proceed-payment";

const Routing = () => {
  return (
    <CartDataProvider>
      <Routes>
        <Route path={links.home} element={<Home />} />
        <Route path={links.restaurantList} element={<RestaurantList />} />
        <Route path={links.restaurantDetails} element={<RestaurantDetails />}>
          <Route path={links.menu} element={<Menu />} />
          <Route path={links.overview} element={<Overview />} />
        </Route>
        <Route path={links.cart} element={<Cart />}>
          <Route path={links.cartItems} element={<CartItems />} />
          <Route path={links.proceedPayment} element={<ProceedPayment />} />
        </Route>
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
