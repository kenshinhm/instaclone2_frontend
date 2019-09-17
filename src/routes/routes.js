import React from "react";
import PropTypes from "prop-types";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Feed from "./feed/feed.js";
import Auth from "./auth/auth.js";

const LoggedInRoute = () => (
    <React.Fragment>
        <Route exact path='/' componet={Feed}/>
    </React.Fragment>
);

const LoggedOutRoute = () => (
    <React.Fragment>
        <Route exact path='/' componet={Auth}/>
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