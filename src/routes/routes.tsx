import React from "react";
import { Route, Routes } from "react-router";
import ForgotPassword from "../containers/forgot-password/index";
import Login from "../containers/login";
import Verification from "../containers/verification";
import Verified from "../containers/verified";
import PasswordSuccess from "../containers/password-success";
import RegisterSuccess from "../containers/welcome";
import CreateAccount from "../containers/create-account";
import AccountDetails from "../containers/account-details";
import { links } from "../variables";
import Home from "../components/home";
const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routing;
