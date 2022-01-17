import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import RestaurantList from "../components/Restaurant list";
import RestaurantDetails from "../components/RestaurantDetails";
import CartDataProvider from "../components/common/CartDataProvider";
import Menu from "../components/RestaurantDetails/Menu";
import Overview from "../components/RestaurantDetails/Overview";
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
          <Route path={links.overview} element={<Overview />} />
        </Route>
        <Route
          path="order-card"
          element={
            <OrderCard
              cardDetails={{
                orderId: "1234567890",
                hotelName: "The Boutique Kitchen",
                address: "Shiekh Zayed Road, Dubai, UAE",
                Items: "3",
                Costs: "85.76",
                DeliveryStatus: "Out for Delivery",
              }}
            />
          }
        />
      </Routes>
    </CartDataProvider>
  );
};

export default Routing;
