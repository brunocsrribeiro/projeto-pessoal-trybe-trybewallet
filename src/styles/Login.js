import styled from "styled-components";

export const ContainerLogin = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const FormLoginStyle = styled.form`
  align-items: center;
  align-items: center;
  background: ${ props => props.theme.quinaryColor };
  border-radius: 4px;
  box-shadow: 2px 2px 8px ${ props => props.theme.quinaryColor };
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  width: 50vw;

  input {
    background: none;
    border-radius: 4px;
    border: 1px solid ${ props => props.theme.tertiaryColor };
    border: none;
    letter-spacing: .2em;
    line-height: 2em;
    margin-bottom: 20px;
    outline: none;
    padding: .8em;
    text-align: center;
    width: 35vw;
  };

  button {
    width: 35vw;
  }
`;
