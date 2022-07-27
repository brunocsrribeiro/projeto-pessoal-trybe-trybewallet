import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Edu VIC WA NT Beginner', cursive;
    margin: 0;
    padding: 0;
  }

  body {
    color: '#454545';
    font-size: 62,5%;
  }
`;

export const theme = {
  primaryColor: '#58C062',
  primaryColorHover: '#3CB371',
  secondaryColor: '#F8F8FF',
  tertiaryColor: '#00ACEE',
  tertiaryColorHover: '#6495ED',
  quaternaryColor: '#B22222',
  quaternaryColorHover: '#FF4500',
  quinaryColor: '#F5FFFA',
};