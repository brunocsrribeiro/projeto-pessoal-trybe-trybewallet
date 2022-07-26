import styled from 'styled-components';

export const Container = styled.header`
  background: ${ props => props.theme.primaryColor };
  position: fixed;
  top: 0;
  height: 15vh;
  max-height: 25vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid ${ props => props.theme.secondaryColor } ;
`;

export const HeaderStyle = styled.div`
  font-size: large;
  letter-spacing: .25em;
  width: 60%;
  color: ${ props => props.theme.secondaryColor };
`;

export const Fields = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  letter-spacing: .10em;

  div {
    color: ${ props => props.theme.secondaryColor };
    line-height: 30px;
    width: 100%;
  }

  span {
    background: ${ props => props.theme.secondaryColor };
    padding: 12px;
    border-radius: 100%;
    color: ${ props => props.theme.primaryColor };
  }
`;
