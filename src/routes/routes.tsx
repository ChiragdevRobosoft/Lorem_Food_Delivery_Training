import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import { links } from "../variables";

const Routing = () => {
  return (
    <Routes>
      <Route path={links.home} element={<Home />} />
      <Route path={links.restaurantList} element={<RestaurantList />} />
    </Routes>
  );
};

export default Routing;
