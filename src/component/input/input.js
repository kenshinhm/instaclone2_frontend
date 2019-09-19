import React from "react";
import * as PropTypes from "prop-types";
import {Container} from "./inputStyle.js";

const Input = ({
    placeholder,
    required = true,
    value,
    onChange,
    type = "text"
}) => <Container placeholder={placeholder}
                 required={required}
                 value={value}
                 onChange={onChange}
                 type={type}/>;

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Input;