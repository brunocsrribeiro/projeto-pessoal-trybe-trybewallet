import styled from "styled-components";

export const ContainerForms = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 66vh;
  justify-content: center;
  width: 100vw;
`;

export const FormStyle = styled.form`
  display: grid;
  gap: .5rem;
  grid-template-columns: repeat(2, auto);
  width: 70vw;

  label {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
  }
`;