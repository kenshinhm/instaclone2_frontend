import React from 'react';
import {ThemeProvider} from "styled-components";
import Theme from "../styles/theme.js";
import GlobalStyles from "../styles/globalStyles.js";
import AppRouter from "../routes/routes.js";

const App = () => (
    <ThemeProvider theme={Theme}>
        <React.Fragment>
            <GlobalStyles/>
            <AppRouter isLoggedIn={false}/>
        </React.Fragment>
    </ThemeProvider>
);

export default App;