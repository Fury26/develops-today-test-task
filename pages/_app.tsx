import react from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from 'styled-components';
import { AppTheme } from "../components/styled/styled";
import { theme } from "../components/styled/theme";
import React from "react";
import GlobalTheme from '../components/styled/global'




const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalTheme />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
