import React from "react";
import Button from "../button/button.js";

const FollowButtonPresenter = ({isFollowing, onClick}) => (
    <Button text={isFollowing ? "Unfollow" : "Follow"} onClick={onClick}/>
);

export default FollowButtonPresenter;