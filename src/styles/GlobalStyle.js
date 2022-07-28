import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: #FFF;
    color: #454545;
    font-family: 'Lato', sans-serif;
  }
`;

export const theme = {
  danger: '#B22222',
  danger_hover: '#FF4500',
  disabled: '#DCDCDC',
  neutral: '#F8F8FF',
  primary: '#00ACEE',
  primary_hover: '#6495ED',
  success: '#58C062',
  success_hover: '#3CB371',
  tableRows: '#D3D3D3',  
};