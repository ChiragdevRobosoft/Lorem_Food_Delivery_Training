import { Route, Routes } from "react-router";
import Home from "../components/home";
import Profile from "../components/profile";
const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routing;
