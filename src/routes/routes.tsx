import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import RestaurantDetails from "../components/RestaurantDetails";
import CartDataProvider from "../components/common/CartDataProvider";
import Menu from "../components/RestaurantDetails/Menu";
import { links } from "../variables";
import OrderCard from "../components/common/orderCard";

const Routing = () => {
  return (
    <CartDataProvider>
      <Routes>
        <Route path={links.home} element={<Home />} />
        <Route path={links.restaurantList} element={<RestaurantList />} />
        <Route path={links.restaurantDetails} element={<RestaurantDetails />}>
          <Route path={links.menu} element={<Menu />} />
        </Route>
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
