import styled from "styled-components";

export const Container = styled.input`
    border: 0;
    border: ${props => props.theme.boxBorder};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.bgColor};
    height: 35px;
    font-size: 12px;
    padding: 0 15px;
`;