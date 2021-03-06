import styled from 'styled-components'

export const Table = styled('table').attrs({
  className: 'tl mt3 w-100'
})`
  
  border-collapse: collapse;
  
  & thead th {
    border: 1px solid black;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

  & tbody td {
    border: 1px solid black;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

  & tbody > tr {
    display: table-row;
  }

`

export default Table
