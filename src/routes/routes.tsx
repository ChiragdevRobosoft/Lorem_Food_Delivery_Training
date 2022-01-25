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
import EditProfile from "../components/profile/editProfile";
import Cart from "../components/cart";
import CartItems from "../components/cart/cart-items";
import ProceedPayment from "../components/cart/proceed-payment";

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
        <Route path={links.editProfile} element={<EditProfile />} />
        <Route path={links.cart} element={<Cart />}>
          <Route path={links.cartItems} element={<CartItems />} />
          <Route path={links.proceedPayment} element={<ProceedPayment />} />
        </Route>
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
