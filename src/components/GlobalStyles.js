import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        transition: background 1s ease;
        &.dark-mode {
            background: rgb(0,0,0,0.85);
            color: #fff !important;
        }
    }

    .container {
        width: 1300px;
        max-width: 95%;
        margin: auto;
    }

    input {
        background-color: transparent;
        border: none;
    }

    input:focus {
        outline: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

`;

export default GlobalStyles;
