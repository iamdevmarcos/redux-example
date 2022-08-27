import { createGlobalStyle } from 'styled-components'
 
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    transition: all ease-in-out 0.4s;
  }
`;
 
export default GlobalStyles