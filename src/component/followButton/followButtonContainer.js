import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {useMutation} from "react-apollo-hooks";
import {FOLLOW, UNFOLLOW} from "./followButtonQuery.js";
import FollowButtonPresenter from "./followButtonPresenter.js";

const FollowButton = ({isFollowing, id}) => {
    const [isFollowingS, setIsFollowing] = useState(isFollowing);
    const [followMutation] = useMutation(FOLLOW, {variables: {id}});
    const [unfollowMutation] = useMutation(UNFOLLOW, {variables: {id}});

    const onClick = async () => {
        if (isFollowingS === true) {
            setIsFollowing(false);
            await unfollowMutation();
        } else {
            setIsFollowing(true);
            await followMutation();
        }
    };
    return <FollowButtonPresenter onClick={onClick} isFollowing={isFollowingS}/>;
};

FollowButton.propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default FollowButton;