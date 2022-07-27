import styled from 'styled-components';

export const ContainerTable = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const TableStyle = styled.table`
  border-spacing: 0;
  margin-bottom: 40px;
  table-layout: fixed;
  width: 94vw;
  
  thead {
    background: ${ props => props.theme.tertiaryColor };
    color:  ${ props => props.theme.secondaryColor };
    letter-spacing: .1em;
  }
  
  th {
    padding: 6px;
    
    &.border-radius-description,
    &.border-radius-edit-remove {
      border-bottom: 3px solid ${ props => props.theme.tertiaryColor };
      border-top: 3px solid ${ props => props.theme.tertiaryColor };
    }

    &.border-radius-description {
      border-radius: 8px 0 0 8px;
    }

    &.border-radius-edit-remove {
      border-radius: 0 8px 8px 0;
    }
  }
  
  tr {
    text-align: center;
  }
  
  td {
    text-align: center;
    word-wrap: break-word;

    &.border-description {
      border-left: 6px solid ${ props => props.theme.primaryColor };
      border-radius: 5px;
    }

    &.table-btns {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
`;
