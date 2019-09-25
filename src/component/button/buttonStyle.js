import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    font-weight: 600;
    background-color: ${props => props.theme.blueColor};
    text-align: center;
    padding: 7px 0;
    font-size: 14px;
    cursor: pointer;
`;