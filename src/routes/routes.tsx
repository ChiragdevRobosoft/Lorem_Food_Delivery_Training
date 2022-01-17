import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import RestaurantDetails from "../components/RestaurantDetails";
import CartDataProvider from "../components/common/CartDataProvider";
import Menu from "../components/RestaurantDetails/Menu";
import Overview from "../components/RestaurantDetails/Overview";
import { links } from "../variables";
import PaymentCard from "../components/common/paymentCard";

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
        <Route
          path="PaymentCard"
          element={
            <PaymentCard
              cardDetails={{
                cardNumber: "2345 XXXX XXXX 6574",
                cardType: "American Experess",
              }}
            />
          }
        />
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
