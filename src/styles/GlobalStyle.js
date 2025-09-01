import { createGlobalStyle } from "styled-components";
import CaustenRegular from "../fonts/Causten-Regular.otf";
import CoreSans from "../fonts/Fontspring-DEMO-coresansc65.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Causten';
    src: url(${CaustenRegular}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'CoreSans';
    src: url(${CoreSans}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Causten', sans-serif;
  }
`;

export default GlobalStyle;