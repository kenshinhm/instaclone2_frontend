import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
`;

export const List = styled.ul`
    display: flex;
`;

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-right: 16px;
    }
`;

export const Link = styled.a`
    color: ${props => props.theme.darkBlueColor}
`;

export const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;