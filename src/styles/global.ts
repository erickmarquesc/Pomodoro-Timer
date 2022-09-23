import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  };
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["gray-500"]};
  };
  
  body{
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme["gray-300"]};
    background: ${props => props.theme["gray-900"]};
  };

`;