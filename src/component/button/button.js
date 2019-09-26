import React from "react";
import * as PropTypes from "prop-types";
import {Container} from "./buttonStyle.js";

const Button = ({text, onClick}) => (
    <Container onClick={onClick}>{text}</Container>
);

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;