import {gql} from 'apollo-boost';

export const appQuery = gql`
    {
        isLoggedIn @client
    }
`;
