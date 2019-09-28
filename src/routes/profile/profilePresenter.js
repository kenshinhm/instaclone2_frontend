import React from "react";
import Loader from "../../component/loader/loader.js";
import {
    Bio,
    Count,
    Counts,
    FullName,
    Header,
    HeaderColumn,
    Posts,
    Username,
    UsernameRow,
    Wrapper
} from "./profileStyle.js";
import {Helmet} from "react-helmet";
import Avatar from "../../component/avatar/avatar.js";
import FollowButton from "../../component/followButton/followButtonContainer.js";
import FatText from "../../component/fatText/fatText.js";
import SquarePost from "../../component/squarePost/squarePost.js";
import Button from "../../component/button/button.js";

const ProfilePresenter = ({loading, data, logOut}) => {
    if (loading === true) {
        return (
            <Wrapper>
                <Loader/>
            </Wrapper>
        );
    } else if (!loading && data && data.seeUser) {
        const {
            seeUser: {
                id,
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
            <Wrapper>
                <Helmet>
                    <title>{username} | Prismagram</title>
                </Helmet>
                <Header>
                    <HeaderColumn>
                        <Avatar size="lg" url={avatar}/>
                    </HeaderColumn>
                    <HeaderColumn>
                        <UsernameRow>
                            <Username>{username}</Username>{" "}
                            {isSelf ? (
                                <Button onClick={logOut} text="Log Out"/>
                            ) : (
                                <FollowButton isFollowing={isFollowing} id={id}/>
                            )}
                        </UsernameRow>
                        <Counts>
                            <Count>
                                <FatText text={String(postsCount)}/> posts
                            </Count>
                            <Count>
                                <FatText text={String(followersCount)}/> followers
                            </Count>
                            <Count>
                                <FatText text={String(followingCount)}/> following
                            </Count>
                        </Counts>
                        <FullName text={fullName}/>
                        <Bio>{bio}</Bio>
                    </HeaderColumn>
                </Header>
                <Posts>
                    {posts &&
                     posts.map(post => (
                         <SquarePost
                             key={post.id}
                             likeCount={post.likeCount}
                             commentCount={post.commentCount}
                             file={post.files[0]}
                         />
                     ))}
                </Posts>
            </Wrapper>
        );
    }
    return null;
};

export default ProfilePresenter;