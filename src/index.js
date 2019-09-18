import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app.js';
import {ApolloProvider} from "react-apollo-hooks";
import Client from "./apollo/client.js";

ReactDOM.render(
    <ApolloProvider client={Client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);