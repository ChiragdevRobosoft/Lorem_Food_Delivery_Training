import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import RestaurantDetails from "../components/RestaurantDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="restaurant-list" element={<RestaurantList />} />
      <Route path="menu" element={<RestaurantDetails />} />
    </Routes>
  );
};

export default Routing;
