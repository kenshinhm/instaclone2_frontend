import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import PostPresenter from "./postPresenter";
import useInput from "../../hooks/useInput.js";
import {useMutation} from "react-apollo-hooks";
import {ADD_COMMENT, TOGGLE_LIKE} from "./postQuery.js";

const Post = ({
    id,
    user,
    files,
    likeCount,
    isLiked,
    comments,
    createdAt,
    caption,
    location
}) => {
    const [isLikedState, setIsLiked] = useState(isLiked);
    const [likeCountState, setLikeCount] = useState(likeCount);
    const [currentItem, setCurrentItem] = useState(0);
    const comment = useInput("");
    const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
        variables: {postId: id}
    });
    const [addCommentMutation] = useMutation(ADD_COMMENT, {
        variables: {postId: id, text: comment.value}
    });

    useEffect(() => {
        const totalFiles = files.length;
        if (currentItem === totalFiles - 1) {
            setTimeout(() => setCurrentItem(0), 4000);
        } else {
            setTimeout(() => setCurrentItem(currentItem + 1), 4000);
        }
    }, [currentItem, files]);

    const toggleLike = async () => {
        if (isLikedState === true) {
            setIsLiked(false);
            setLikeCount(likeCountState - 1);
        } else {
            setIsLiked(true);
            setLikeCount(likeCountState + 1);
        }
        // can insert try catch below
        await toggleLikeMutation();
    };

    return (
        <PostPresenter
            user={user}
            files={files}
            likeCount={likeCountState}
            location={location}
            caption={caption}
            isLiked={isLikedState}
            comments={comments}
            createdAt={createdAt}
            newComment={comment}
            setIsLiked={setIsLiked}
            setLikeCount={setLikeCount}
            currentItem={currentItem}
            toggleLike={toggleLike}
        />
    );
};

Post.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    files: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    likeCount: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.shape({
                id: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    caption: PropTypes.string.isRequired,
    location: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
};

export default Post;