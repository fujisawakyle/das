import React from "react";
import { ThemeProvider } from "styled-components";

const baseTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/scss/themeVariables/base.scss');
const darkTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/scss/themeVariables/dark.scss');

const Themed = ({ dark, children }) => {
    const theme = dark ? darkTheme : baseTheme;
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Themed;