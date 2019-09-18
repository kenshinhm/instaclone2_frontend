import React from 'react';
import {ThemeProvider} from "styled-components";
import Theme from "../../styles/theme.js";
import GlobalStyles from "../../styles/globalStyles.js";
import AppRouter from "../../routes/routes.js";
import {useQuery} from "react-apollo-hooks";
import {appQuery} from "./appQuery.js";

const App = () => {
    const {data: {isLoggedIn}} = useQuery(appQuery);

    return (
        <ThemeProvider theme={Theme}>
            <React.Fragment>
                <GlobalStyles/>
                <AppRouter isLoggedIn={isLoggedIn}/>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default App;