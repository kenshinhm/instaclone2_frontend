import React from "react";
import * as PropTypes from "prop-types";
import {CommentFullIcon, HeartFullIcon} from "../icons/icons.js";
import {Container, Number, NumberText, Overlay} from "./squarePostStyle.js";

const SquarePost = ({likeCount, commentCount, file}) => (
    <Container bg={file.url}>
        <Overlay>
            <Number>
                <HeartFullIcon/>
                <NumberText>{likeCount}</NumberText>
            </Number>
            <Number>
                <CommentFullIcon/>
                <NumberText>{commentCount}</NumberText>
            </Number>
        </Overlay>
    </Container>
);

SquarePost.propTypes = {
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    file: PropTypes.object.isRequired
};

export default SquarePost;