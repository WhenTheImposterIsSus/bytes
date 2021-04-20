import React from "react";
import "./App.css";
import Settings from './settings/settings'
import {
    ThemeProvider,
    theme,
    CSSReset,
    ChakraProvider
} from "@chakra-ui/react";

function App() {
    return (
        <>
            <ChakraProvider>
                <ThemeProvider theme={theme}>
                    <CSSReset />
                    <Settings />
                </ThemeProvider>
            </ChakraProvider>
        </>
    );
}

export default App; 
