import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  width: 70%;
`;

export const FormLoginStyle = styled.form`
  align-items: flex-end;
  background: ${ props => props.theme.primary };
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  padding: 40px;

  input {
    border-radius: 4px;
    border: none;
    letter-spacing: .2em;
    margin-bottom: 10px;
    outline: none;
    padding: .6em;
    text-align: center;
    width: 25vw;
  };

  button {
    margin-top: 20px;
    margin: 0;
    padding: 20px;
    width: 25vw;
  }
`;
