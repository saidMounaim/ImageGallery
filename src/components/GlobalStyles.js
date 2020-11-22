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
    }

    .container {
        width: 1300px;
        max-width: 95%;
        margin: auto;
    }

    a {
        text-decoration: none;
    }

    input {
        background-color: transparent;
        border: none;
    }

    input:focus {
        outline: none;
    }

    li {
        list-style:none;
    }

    img {
        max-width: 100%;
        display: block;
    }

`;

export default GlobalStyles;
