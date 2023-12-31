'use client'

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #000;
        color: #fff;
    }

    html, body, #__next {
        height: 100vh;
    }
`;