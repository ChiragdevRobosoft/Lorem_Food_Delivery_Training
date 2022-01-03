import React, { createContext, useState } from "react";

export const CartData = createContext<any>([]);

const CartDataProvider = (props: any) => {
  const [details, setDetails] = useState([]);
  return (
    <CartData.Provider value={{ details, setDetails }}>
      {props.children}
    </CartData.Provider>
  );
};

export default CartDataProvider;
