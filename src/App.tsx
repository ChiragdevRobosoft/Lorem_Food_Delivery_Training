import React from "react";

import Home from "./components/home/index";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantList from "./components/Restaurant list";
import Routing from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
