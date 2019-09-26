import styled from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s linear;
    svg {
        fill: white;
    }
`;

export const Container = styled.div`
    background-image: url(${props => props.bg});
    background-size: cover;
    cursor: pointer;
    &:hover {
        ${Overlay} {
            opacity: 1;
        }
    }
`;

export const Number = styled.div`
    color: white;
    display: flex;
    align-items: center;
    &:first-child {
        margin-right: 30px;
    }
`;

export const NumberText = styled.span`
    margin-left: 10px;
    font-size: 16px;
`;