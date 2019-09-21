import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import Theme from "../../styles/theme.js";
import GlobalStyles from "../../styles/globalStyles.js";
import AppRouter from "../../routes/routes.js";
import {useQuery} from "react-apollo-hooks";
import {appQuery} from "./appQuery.js";
import {Footer} from "../footer/footer.js";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
    margin: 0 auto;
    max-width: 935px;
    width: 100%;
`;

const App = () => {
    const {data: {isLoggedIn}} = useQuery(appQuery);

    return (
        <ThemeProvider theme={Theme}>
            <React.Fragment>
                <Container>
                    <GlobalStyles/>
                    <AppRouter isLoggedIn={isLoggedIn}/>
                    <Footer/>
                    <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
                </Container>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default App;