import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f9f9f9;
    color: #1c1c1e;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;