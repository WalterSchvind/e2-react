import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body{
       font-family: 'Signika Negative', sans-serif;
       background-color:black;
    }
`;
