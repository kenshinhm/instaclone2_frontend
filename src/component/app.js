import React from 'react';
import {ThemeProvider} from "styled-components";
import Theme from "../styles/theme.js";
import GlobalStyles from "../styles/globalStyles.js";

const App = () => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles/>
    </ThemeProvider>
);

export default App;