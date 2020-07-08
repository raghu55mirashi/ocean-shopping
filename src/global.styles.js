import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 40px;

        
        background: #20002c;  
        background: -webkit-linear-gradient(to left, #cbb4d4, #20002c);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #cbb4d4, #20002c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


        @media screen and (max-width: 800px){
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }  
`