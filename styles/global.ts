
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --orange: #FF9E2C;
    --green: #05C168;
    --light-red: #FC5842;
    --red: #FF5A65;
    --dark-red: #DC2B2B;
    --lightest-gray: #D7D7D7;
    --light-gray: #C7C7C7;
    --gray: #969696;
    --dark-gray: #393939;
    --darkest-gray: #272727;
    --black: #181818;
  }

  * {
    font-family: THICCCBOI;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }


  body {
    background-color: var(--black);
    color: var(--white);
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
  }

  p, a {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  }

  a {
    color: var(--white);
  }
`