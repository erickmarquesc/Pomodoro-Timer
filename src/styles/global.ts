import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["gray-500"]};
  };
  
  body, html{
    font-size: 10px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme["gray-300"]};
    background: ${props => props.theme["gray-900"]};
  };

  h3{
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  };

`;