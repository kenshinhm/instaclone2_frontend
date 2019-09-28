import React from "react";
import {Switch, Route} from "react-router-dom";
import Feed from "./feed/feed.js";
import Auth from "./auth/authContainer.js";
import * as PropTypes from "prop-types";
import Explore from "./explore/explore.js";
import Search from "./search/searchContainer.js";
import Profile from "./profile/profileContainer.js";
import Notification from "./notification/notification.js";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route path="/explore" component={Explore}/>
        <Route path="/search" component={Search}/>
        <Route path="/notification" component={Notification}/>
        <Route path="/:username" component={Profile}/>
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth}/>
    </Switch>
);

const AppRoutes = ({isLoggedIn}) => isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>;

AppRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRoutes;