import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

export const PostWrapper = styled.div`
    ${props => props.theme.whiteBox};
    width: 100%;
    max-width: 600px;
    user-select: none;
    margin-bottom: 25px;
`;

export const Header = styled.header`
    padding: 15px;
    display: flex;
    align-items: center;
`;

export const UserColumn = styled.div`
    margin-left: 10px;
`;

export const Location = styled.span`
    display: block;
    margin-top: 5px;
    font-size: 12px;
`;

export const Files = styled.div`
    position: relative;
    padding-bottom: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 0;
`;

export const File = styled.div`
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    opacity: ${props => (props.showing ? 1 : 0)};
    transition: opacity 0.5s linear;
`;

export const Textarea = styled(TextareaAutosize)`
    border: none;
    width: 100%;
    resize: none;
    font-size: 14px;
    &:focus {
        outline: none;
    }
`;


export const Button = styled.span`
    cursor: pointer;
`;

export const Meta = styled.div`
    padding: 15px;
`;

export const Buttons = styled.div`
    ${Button} {
        &:first-child {
            margin-right: 10px;
        }
    }
    margin-bottom: 10px;
`;

export const Timestamp = styled.span`
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
    display: block;
    font-size: 12px;
    margin: 10px 0px;
    padding-bottom: 10px;
    border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

export const Comments = styled.ul`
  margin-top: 10px;
`;

export const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;
