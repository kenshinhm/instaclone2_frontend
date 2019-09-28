import React from "react";
import withRouter from "react-router-dom/withRouter";
import {useMutation, useQuery} from "react-apollo-hooks";
import {GET_USER, LOG_OUT} from "./profileQuery.js";
import ProfilePresenter from "./profilePresenter.js";

const Profile = withRouter(({match: {params: {username}}}) => {
    const {data, loading} = useQuery(GET_USER, {variables: {username}});
    const logOut = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} logOut={logOut} data={data}/>;
});

export default Profile;