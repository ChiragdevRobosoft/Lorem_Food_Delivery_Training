import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import CartDataProvider from "../components/common/CartDataProvider";
import Profile from "../components/profile";
import { links } from "../variables";

const Routing = () => {
  return (
    <CartDataProvider>
      <Routes>
        <Route path={links.home} element={<Home />} />
        <Route path={links.restaurantList} element={<RestaurantList />} />
        <Route path={links.profile} element={<Profile />} />
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
