import React from "react";
import {
    Button,
    Buttons, Comment, Comments,
    File,
    Files,
    Header,
    Location,
    Meta,
    PostWrapper,
    Textarea,
    Timestamp,
    UserColumn
} from "./postStyle.js";
import Avatar from "../avatar/avatar.js";
import FatText from "../fatText/fatText.js";
import {CommentIcon, HeartEmptyIcon, HeartFullIcon} from "../icons/icons.js";

const PostPresenter = ({
    user: {username, avatar},
    location,
    files,
    isLiked,
    likeCount,
    createdAt,
    newComment,
    currentItem,
    toggleLike,
    onKeyPress,
    comments,
    selfComments
}) => (
    <PostWrapper>
        <Header>
            <Avatar size="sm" url={avatar}/>
            <UserColumn>
                <FatText text={username}/>
                <Location>{location}</Location>
            </UserColumn>
        </Header>
        <Files>
            {files &&
             files.map((file, index) => (
                 <File key={file.id} src={file.url} showing={index === currentItem}/>
             ))}
        </Files>
        <Meta>
            <Buttons>
                <Button onClick={toggleLike}>
                    {isLiked ? <HeartFullIcon/> : <HeartEmptyIcon/>}
                </Button>
                <Button>
                    <CommentIcon/>
                </Button>
            </Buttons>
            <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`}/>
            {comments && (
                <Comments>
                    {comments.map(comment => (
                        <Comment key={comment.id}>
                            <FatText text={comment.user.username}/>
                            {comment.text}
                        </Comment>
                    ))}
                    {selfComments.map(comment => (
                        <Comment key={comment.id}>
                            <FatText text={comment.user.username}/>
                            {comment.text}
                        </Comment>
                    ))}
                </Comments>
            )}
            <Timestamp>{createdAt}</Timestamp>
            <Textarea placeholder={"Add a comment..."}
                      value={newComment.value}
                      onChange={newComment.onChange}
                      onKeyPress={onKeyPress}/>
        </Meta>
    </PostWrapper>
);

export default PostPresenter;