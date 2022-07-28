import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: ${ props => props.theme.primary };
  display: flex;
  height: 16vh;
  justify-content: space-between;
  max-height: 25vh;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const HeaderStyle = styled.div`
  color: ${ props => props.theme.neutral };
  font-size: large;
  letter-spacing: .25em;
  margin-left: 20px;
  padding: 15px;
  width: 50%;
`;

export const Fields = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  letter-spacing: .10em;
  width: 45%;

  div {
    color: ${ props => props.theme.neutral };
    line-height: 30px;
    padding: 10px;
    width: 70%;
  }

  span {
    color: ${ props => props.theme.neutral };
    font-weight: 700;
    padding: 12px;
  }
`;
