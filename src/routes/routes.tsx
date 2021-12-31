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

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/password-success" element={<PasswordSuccess />} />
      <Route path="/welcome" element={<RegisterSuccess />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/account-details" element={<AccountDetails />} />
    </Routes>
  );
};

export default Routing;
