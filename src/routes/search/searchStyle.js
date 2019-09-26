import styled from "styled-components";

export const SearchWrapper = styled.div`
  height: 50vh;
`;

export const SearchSection = styled.div`
    margin-bottom: 50px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, 160px);
    grid-template-rows: 160px;
    grid-auto-rows: 160px;
`;

export const PostSection = styled(SearchSection)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;