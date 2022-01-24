import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import RestaurantDetails from "../components/RestaurantDetails";
import CartDataProvider from "../components/common/CartDataProvider";
import Profile from "../components/profile";
import Menu from "../components/RestaurantDetails/Menu";
import Overview from "../components/RestaurantDetails/Overview";
import ReviewsRatings from "../components/RestaurantDetails/ReviewsRatings";
import Gallery from "../components/RestaurantDetails/Gallery";
import { links } from "../variables";

const Routing = () => {
  return (
    <CartDataProvider>
      <Routes>
        <Route path={links.home} element={<Home />} />
        <Route path={links.restaurantList} element={<RestaurantList />} />
        <Route path={links.profile} element={<Profile />} />
        <Route path={links.restaurantDetails} element={<RestaurantDetails />}>
          <Route path={links.menu} element={<Menu />} />
          <Route path={links.overview} element={<Overview />} />
          <Route path={links.reviewsRatings} element={<ReviewsRatings />} />
          <Route path={links.gallery} element={<Gallery />} />
        </Route>
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
