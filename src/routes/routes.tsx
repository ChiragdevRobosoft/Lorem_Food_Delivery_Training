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
      {/* <Route path={`${links.login}`} element={<Login />} /> */}
      {/* <Route path={`${links.forgotPassword}`} element={<ForgotPassword />} /> */}
      {/* <Route path={`${links.verification}`} element={<Verification />} /> */}
      <Route path={`${links.verified}`} element={<Verified />} />
      <Route path={`${links.passwordSuccess}`} element={<PasswordSuccess />} />
      {/* <Route path={`${links.welcome}`} element={<RegisterSuccess />} /> */}
      {/* <Route path={`${links.createAccount}`} element={<CreateAccount />} /> */}
      {/* <Route path={`${links.accountDetails}`} element={<AccountDetails />} /> */}
    </Routes>
  );
};

export default Routing;
