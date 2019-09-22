import React from "react";
import styled, {keyframes} from "styled-components";
import {LogoIcon} from "../icons/icons.js";


const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const LoaderContainer = styled.div`
    margin-top: 50px;
    animation: ${Animation} 1s linear infinite;
`;

const Loader = () => (
    <LoaderContainer>
        <LogoIcon size={36}/>
    </LoaderContainer>
);

export default Loader;