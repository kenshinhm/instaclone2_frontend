import React from "react";
import {
    Button,
    Buttons,
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
    toggleLike
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
            <Timestamp>{createdAt}</Timestamp>
            <Textarea placeholder={"Add a comment..."} {...newComment} />
        </Meta>
    </PostWrapper>
);

export default PostPresenter;