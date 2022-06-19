
import { createGlobalStyle } from "styled-components";
import { COLORS } from "src/lib/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: THICCCBOI;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  body {
    background-color: ${COLORS.black};
    color: ${COLORS.white};
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
    color: ${COLORS.white};
  }
`