import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import AppRoutes from "../../routes/routes.js";
import {useQuery} from "react-apollo-hooks";
import {appQuery} from "./appQuery.js";
import {Footer} from "../footer/footer.js";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {HashRouter as Router} from "react-router-dom";
import Header from "../header/header.js";
import Theme from "../../shared/theme.js";
import GlobalStyles from "../../shared/globalStyles.js";

const AppContainer = styled.div`
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
    width: 100%;
`;

const App = () => {
    const {data: {isLoggedIn}} = useQuery(appQuery);

    return (
        <ThemeProvider theme={Theme}>
            <>
                <GlobalStyles/>
                <Router>
                    {isLoggedIn && <Header/>}
                    <AppContainer>
                        <AppRoutes isLoggedIn={isLoggedIn}/>
                        <Footer/>
                    </AppContainer>
                </Router>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
            </>
        </ThemeProvider>
    );
};

export default App;