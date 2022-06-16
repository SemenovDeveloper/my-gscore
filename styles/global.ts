
import { createGlobalStyle } from "styled-components";
import { COLORS } from "src/lib/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: THICCCBOI;
  }
  body {
    background-color: ${COLORS.black};
    overflow-x: hidden;
    color: ${COLORS.white};
  }
  a {
    color: ${COLORS.white};
    text-decoration: none;
  }
`