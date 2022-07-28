import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: ${ props => props.theme.success };
  border-radius: 3px;
  border: 2px solid ${ props => props.theme.success};
  color: ${ props => props.theme.neutral };
  font-size: 1em;
  letter-spacing: .15em;
  margin: 1em;
  padding: 0.25em 1em;

  &#wallet-btn {
    height: 11.2vh;
  }

  &#edit-btn {
    background: ${ props => props.theme.primary };
    border-radius: 100%;
    border: 2px solid ${ props => props.theme.primary};
    padding: 10px;

    :hover {
      background: ${ props => props.theme.primary_hover };
      border: 2px solid ${ props => props.theme.primary_hover};
      cursor: pointer;
    }
  }

  &#delete-btn {
    background: ${ props => props.theme.danger };
    border-radius: 100%;
    border: 2px solid ${ props => props.theme.danger};
    padding: 10px;

    :hover {
      background: ${ props => props.theme.danger_hover };
      border: 2px solid ${ props => props.theme.danger_hover};
      cursor: pointer;
    }
  }

  :hover {
    background: ${ props => props.theme.success_hover };
    border: 2px solid ${ props => props.theme.success_hover};
    cursor: pointer;
  }

  &:disabled {
    background: ${ props => props.theme.disabled };
    border: 2px solid ${ props => props.theme.disabled};
    color: ${ props => props.theme.neutral };
  } 
`;
