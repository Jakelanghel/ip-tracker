import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --very-dark-gray: hsl(0, 0%, 17%)
    --dark-gray: hsl(0, 0%, 59%) 
}

* {
    box-sizing: border-box;
}

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;

    }
    #root {
        height: 100%
    }
`;
