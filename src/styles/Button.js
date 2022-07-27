import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: ${ props => props.theme.primaryColor };
  border-radius: 3px;
  border: 2px solid ${ props => props.theme.primaryColor};
  color: ${ props => props.theme.secondaryColor };
  font-size: 1em;
  font-weight: bolder;
  margin: 1em;
  padding: 0.25em 1em;

  &#wallet-btn {
    height: 11.2vh;
  }

  &#edit-btn {
    background: ${ props => props.theme.tertiaryColor };
    border-radius: 100%;
    border: 2px solid ${ props => props.theme.tertiaryColor};
    padding: 10px;

    :hover {
    cursor: pointer;
      background: ${ props => props.theme.tertiaryColorHover };
      border: 2px solid ${ props => props.theme.tertiaryColorHover};
    }
  }

  &#delete-btn {
    background: ${ props => props.theme.quaternaryColor };
    border-radius: 100%;
    border: 2px solid ${ props => props.theme.quaternaryColor};
    padding: 10px;

    :hover {
      background: ${ props => props.theme.quaternaryColorHover };
      border: 2px solid ${ props => props.theme.quaternaryColorHover};
      cursor: pointer;
    }
  }

  :hover {
    background: ${ props => props.theme.primaryColorHover };
    border: 2px solid ${ props => props.theme.primaryColorHover};
    cursor: pointer;
  }
`;
