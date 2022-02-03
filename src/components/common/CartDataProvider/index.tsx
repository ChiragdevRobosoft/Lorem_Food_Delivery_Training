import React, { createContext, useState } from "react";

if (!Array.isArray(JSON.parse(localStorage.getItem("cartData") || "{}"))) {
  localStorage.setItem("cartData", JSON.stringify([]));
}
const cartItems = JSON.parse(localStorage.getItem("cartData") || "{}");
export const CartData = createContext<any>({
  cartDetails: [],
  setCartDetails: () => {},
});

const CartDataProvider = (props: { children: React.ReactNode }) => {
  const [cartDetails, setCartDetails] = useState(cartItems);
  localStorage.setItem("cartData", JSON.stringify(cartDetails));
  return (
    <CartData.Provider value={{ cartDetails, setCartDetails }}>
      {props.children}
    </CartData.Provider>
  );
};

export default CartDataProvider;
