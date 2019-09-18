import styled from "styled-components";

export const Container = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Box = styled.div`
    ${props => props.theme.whiteBox};
    border-radius: 0;
    width: 100%;
    max-width: 350px;
`;

export const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0;
`;

export const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
`;

export const Form = styled(Box)`
    padding: 40px 40px 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        input {
            width: 100%;
            &:not(:last-child) {
                margin-bottom: 7px;
            }
        }
        button {
            margin-top: 10px;
        }
    }
`;