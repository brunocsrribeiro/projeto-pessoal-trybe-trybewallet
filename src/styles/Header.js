import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: ${ props => props.theme.primaryColor };
  border-bottom: 2px solid ${ props => props.theme.secondaryColor } ;
  display: flex;
  height: 15vh;
  justify-content: space-evenly;
  max-height: 25vh;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const HeaderStyle = styled.div`
  color: ${ props => props.theme.secondaryColor };
  font-size: large;
  letter-spacing: .25em;
  width: 60%;
`;

export const Fields = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  letter-spacing: .10em;
  width: 25%;

  div {
    color: ${ props => props.theme.secondaryColor };
    line-height: 30px;
    width: 100%;
  }

  span {
    background: ${ props => props.theme.secondaryColor };
    border-radius: 100%;
    color: ${ props => props.theme.primaryColor };
    padding: 12px;
  }
`;
