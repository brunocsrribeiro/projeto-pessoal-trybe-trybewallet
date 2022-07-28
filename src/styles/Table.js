import styled from 'styled-components';

export const ContainerTable = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 0 8px ;
  margin-bottom: 40px;
  table-layout: fixed;
  width: 94vw;
  
  thead {
    background: ${ props => props.theme.primary };
    color:  ${ props => props.theme.neutral };
    letter-spacing: .1em;
  }
  
  th {
    padding: 6px;

    &.border-radius-description,
    &.border-radius-edit-remove {
      border-bottom: 3px solid ${ props => props.theme.primary };
      border-top: 3px solid ${ props => props.theme.primary };
    }

    &.border-radius-description {
      border-radius: 8px 0 0 4px;
    }

    &.border-radius-edit-remove {
      border-radius: 0 8px 4px 0;
    }
  }
  
  tr {
    text-align: center;
  }
  
  td {
    background: ${ props => props.theme.tableRows };
    border-bottom: 1px solid ${ props => props.theme.tableRows };
    border-left-width: 0;
    border-top: 1px solid ${ props => props.theme.tableRows };
    text-align: center;
    word-wrap: break-word;
    
    &.border-description {
      border-left: 6px solid ${ props => props.theme.success };
      border-radius: 5px 0 0 5px;
    }
    
    &.table-btns {
      border-radius: 0 5px 5px 0;
      border-right: 6px solid ${ props => props.theme.tableRows };
    }
  }
`;
