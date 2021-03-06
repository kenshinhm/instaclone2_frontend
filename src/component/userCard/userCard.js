import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Avatar from "../avatar/avatar.js";
import FatText from "../fatText/fatText.js";
import {Link} from "react-router-dom";
import FollowButton from "../followButton/followButtonContainer.js";

const Card = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    ${props => props.theme.whiteBox};
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

const UserCard = ({id, username, isFollowing, url, isSelf}) => (
    <Card>
        <EAvatar url={url} size={"md"}/>
        <ELink to={`/${username}`}>
            <FatText text={username}/>
        </ELink>
        {!isSelf && <FollowButton id={id} isFollowing={isFollowing}/>}
    </Card>
);

UserCard.propTypes = {
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    isSelf: PropTypes.bool.isRequired
};

export default UserCard;