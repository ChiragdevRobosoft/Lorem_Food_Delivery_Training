import React from "react";
import { Route, Switch } from "react-router";
import ForgotPassword from "../containers/forgot-password/index";
import Login from "../containers/login";
import Verification from "../containers/verification";
import Verified from "../containers/verified";
import PasswordSuccess from "../containers/password-success";
import RegisterSuccess from "../containers/welcome";
import CreateAccount from "../containers/create-account";


const Routes = () => {
    return (

        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/verification" component={Verification} />
            <Route path="/verified" component={Verified} />
            <Route path="/password-success" component={PasswordSuccess} />
            <Route path="/welcome" component={RegisterSuccess} />
            <Route path="/create-account" component={CreateAccount} />
        </Switch>

    );
};

export default Routes;