import React from "react";
import * as PropTypes from "prop-types";
import {Container} from "./inputStyle.js";

const Input = ({placeholder}) => <Container placeholder={placeholder}/>;

Input.propTypes = {
    placeholder: PropTypes.string.isRequired
};

export default Input;