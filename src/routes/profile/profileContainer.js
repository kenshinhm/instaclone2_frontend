import React from "react";
import withRouter from "react-router-dom/withRouter";
import {useQuery} from "react-apollo-hooks";
import {GET_USER} from "./profileQuery.js";
import ProfilePresenter from "./profilePresenter.js";

const Profile = withRouter(({match: {params: {username}}}) => {
    const {data, loading} = useQuery(GET_USER, {variables: {username}});
    return <ProfilePresenter loading={loading} data={data}/>;
});

export default Profile;