import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-weight: bolder;

  color: ${ props => props.theme.secondaryColor };
  border: 2px solid ${ props => props.theme.primaryColor};
  background: ${ props => props.theme.primaryColor };

  &#wallet-btn {
    height: 11.2vh;
  }

  &#edit-btn {
    background: ${ props => props.theme.tertiaryColor };
    border: 2px solid ${ props => props.theme.tertiaryColor};

    :hover {
    cursor: pointer;
      background: ${ props => props.theme.tertiaryColorHover };
      border: 2px solid ${ props => props.theme.tertiaryColorHover};
    }
  }

  &#delete-btn {
    background: ${ props => props.theme.quaternaryColor };
    border: 2px solid ${ props => props.theme.quaternaryColor};

    :hover {
      cursor: pointer;
      background: ${ props => props.theme.quaternaryColorHover };
      border: 2px solid ${ props => props.theme.quaternaryColorHover};
    }
  }

  :hover {
    cursor: pointer;
    background: ${ props => props.theme.primaryColorHover };
    border: 2px solid ${ props => props.theme.primaryColorHover};
  }
`;
