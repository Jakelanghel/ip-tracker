import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --very-dark-gray: hsl(0, 0%, 17%);
        --dark-gray: hsl(0, 0%, 59%);
        --light-gray: #D9D9D9;
        --white: hsl(0, 0%, 100%);
        --red: #FF3864;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #root {
        height: 100%
    }

    html,
    body {
        height: 100%;
        font-family: 'Rubik', sans-serif;
        color: var(--very-dark-gray);

    }

    .container-app {
        height: 100%;
        position: relative;
      
    }

    .container-search {
        height: 35%;
    }

    .leaflet-container {
        height: 65%;
        z-index: 0;
    }

    .custom-tool-tip {
        border-radius: 5px;
    }

    .marker-info {
        color: var(--very-dark-gray);
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .marker-info-ip {
        flex-direction: column;
        align-items: center;
        border-bottom: solid 1px var(--very-dark-gray);
    }

    .marker-span {
        font-weight: 500;
    }

    @media screen and (min-width: 800px) {
        .container-search {
            height: 25%;
        }

        .leaflet-container {
            height: 75%;
            z-index: 0;
        }
    }

    @media screen and (min-width: 1200px) {
        .container-search {
            height: 30%;
        }

        .leaflet-container {
            height: 70%;
            z-index: 0;
        }
    }
    
`;
