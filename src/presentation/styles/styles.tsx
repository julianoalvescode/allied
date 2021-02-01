import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}

				 html, body, #root {
        	
						font-family: 'Poppins', Arial, Helvetica, sans-serif ;

						@media (min-width: 1300px ) {
									height: 100vh;
						}
				}
				
				 body {
						-webkit-font-smoothing: antialiased;
						font-family: 'Poppins', Arial, Helvetica, sans-serif ;
    		}

				input {
					border-radius: 3px;
					padding: 5px 15px !important;
          width: 100%;
          border: 1px solid #ccc;
				
					:focus {
						outline: 0;
					}

				}

				

`;
