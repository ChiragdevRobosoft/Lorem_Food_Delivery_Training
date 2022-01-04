import React, { createContext, useState } from "react";

export const CartData = createContext<any>({
  details: [],
  setDetails: () => {},
});

const CartDataProvider = (props: { children: React.ReactNode }) => {
  const [details, setDetails] = useState([]);
  return (
    <CartData.Provider value={{ details, setDetails }}>
      {props.children}
    </CartData.Provider>
  );
};

export default CartDataProvider;
