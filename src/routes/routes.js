import React from "react";
import {Switch, Route} from "react-router-dom";
import Feed from "./feed/feed.js";
import Auth from "./auth/authContainer.js";
import * as PropTypes from "prop-types";

const LoggedInRoute = () => (
    <>
        <Route exact path='/' component={Feed}/>
    </>
);

const LoggedOutRoute = () => (
    <>
        <Route exact path='/' component={Auth}/>
    </>
);

const AppRoutes = ({isLoggedIn}) => (
    <Switch>
        {isLoggedIn ? <LoggedInRoute/> : <LoggedOutRoute/>}
    </Switch>
);

AppRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRoutes;