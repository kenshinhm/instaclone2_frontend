import React from "react";
import {useQuery} from "react-apollo-hooks";
import {FEED_QUERY} from "./feedQuery.js";
import {FeedWrapper} from "./feedStyle.js";
import Loader from "../../component/loader/loader.js";
import Post from "../../component/post/postContainer.js";
import {Helmet} from "react-helmet";

const Feed = () => {
    const {data, loading} = useQuery(FEED_QUERY);
    return (
        <FeedWrapper>
            <Helmet>
                <title>Feed | Prismagram</title>
            </Helmet>
            {loading && <Loader/>}
            {!loading && data && data.seeFeed
             && data.seeFeed.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    location={post.location}
                    caption={post.caption}
                    user={post.user}
                    files={post.files}
                    likeCount={post.likeCount}
                    isLiked={post.isLiked}
                    comments={post.comments}
                    createdAt={post.createdAt}
                />
            ))}
        </FeedWrapper>
    );
};

export default Feed;