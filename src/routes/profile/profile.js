import React from "react";
import {GET_USER} from "./profileQuery.js";
import styled from "styled-components";
import withRouter from "react-router-dom/withRouter";
import {useQuery} from "react-apollo-hooks";
import Loader from "../../component/loader/loader.js";
import Avatar from "../../component/avatar/avatar.js";

const Wrapper = styled.div`
  min-height: 60vh;
`;

const Header = styled.header``;

const HeaderColumn = styled.div``;

const Profile = withRouter(({match: {params: {username}}}) => {
    const {data, loading} = useQuery(GET_USER, {variables: {username}});
    if (loading) {
        return (
            <Wrapper>
                <Loader/>
            </Wrapper>
        );
    } else {
        console.log(data);
        const {
            seeUser: {
                avatar,
                username,
                fullName,
                isFollowing,
                isSelf,
                bio,
                followingCount,
                followersCount,
                postsCount,
                posts
            }
        } = data;
        return (
            <>
                <Header>
                    <HeaderColumn>
                        <Avatar size="lg" url={avatar}/>
                    </HeaderColumn>
                </Header>
            </>
        );
    }
});

export default Profile;