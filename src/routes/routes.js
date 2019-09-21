import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Feed from "./feed/feed.js";
import Auth from "./auth/authContainer.js";
import * as PropTypes from "prop-types";

const LoggedInRoute = () => (
    <React.Fragment>
        <Route exact path='/' component={Feed}/>
    </React.Fragment>
);

const LoggedOutRoute = () => (
    <React.Fragment>
        <Route exact path='/' component={Auth}/>
    </React.Fragment>
);

const AppRouter = ({isLoggedIn}) => (
    <Router>
        <Switch>
            {isLoggedIn ? <LoggedInRoute/> : <LoggedOutRoute/>}
        </Switch>
    </Router>
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;