import React from "react";
import { Route, Switch } from "react-router";
import ForgotPassword from "../containers/forgot-password/index";
import Login from "../containers/login";
import Verification from "../containers/verification";

const Routes = () => {
    return (

        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/verification" component={Verification} />
        </Switch>

    );
};

export default Routes;