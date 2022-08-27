import { createGlobalStyle } from 'styled-components'
 
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    transition: background ease-in-out 0.3s;
  }
`;
 
export default GlobalStyles