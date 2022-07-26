import styled from "styled-components";

export const ContainerForms = styled.div`
  height: 66vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormStyle = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: .5rem;
  width: 70vw;

  label {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
  }
`;