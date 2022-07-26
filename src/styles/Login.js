import styled from "styled-components";

export const ContainerLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLoginStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vh;
  background: ${ props => props.theme.quinaryColor };
  box-shadow: 2px 2px 8px ${ props => props.theme.quinaryColor };
  border-radius: 4px;

  input {
    border: none;
    border: 1px solid ${ props => props.theme.tertiaryColor };
    border-radius: 4px;
    background: none;
    outline: none;
    padding: .8em;
    line-height: 2em;
    letter-spacing: .2em;
    width: 35vw;
    text-align: center;
    margin-bottom: 20px;
  };

  button {
    width: 35vw;
  }
`;
