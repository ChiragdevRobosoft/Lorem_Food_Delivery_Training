import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import RestaurantDetails from "../components/RestaurantDetails";
import CartDataProvider from "../components/common/CartDataProvider";
import Menu from "../components/RestaurantDetails/Menu";
import Overview from "../components/RestaurantDetails/Overview";
import ReviewCard from "../components/RestaurantDetails/ReviewCard";
import { links } from "../variables";

const Routing = () => {
  return (
    <CartDataProvider>
      <Routes>
        <Route path={links.home} element={<Home />} />
        <Route path={links.restaurantList} element={<RestaurantList />} />
        <Route path={links.restaurantDetails} element={<RestaurantDetails />}>
          <Route path={links.menu} element={<Menu />} />
          <Route path={links.overview} element={<Overview />} />
          <Route
            path="reviews-&-ratings"
            element={
              <ReviewCard
                cardDetails={{
                  name: "John Doe",
                  reviewsCount: 2,
                  ratingsCount: 30,
                  ratingNum: 4,
                  reviews:
                    "Offers homely and delicious Indian food choices. The rajma chawal, chana bhature, pav bhaaji, kheer and paan mint shisha are all great. The service is good and staff are friendly. We also liked their playlist, it was a mix of Indian and Western songs.",
                  date: "March 15, 2018",
                  likesCount: 45,
                  images: 0,
                }}
              />
            }
          />
        </Route>
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
