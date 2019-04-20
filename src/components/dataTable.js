import React from 'react'
import styled from 'styled-components'
import { DataTable, Text, defaultProps } from 'grommet'

import { Button, EthAddress } from 'components'

const SDataTable = styled(DataTable)`
  tbody > tr:nth-child(odd) {
    background: ${defaultProps.theme.global.colors['light-3']}
  };
  table-layout: fixed;
  width: 100%;
  th:nth-of-type(2), th:nth-of-type(3){ text-align: center; }
  th:nth-of-type(1) { width: 40% !important; }
  th:nth-of-type(4), th:nth-of-type(5) { width: 4rem !important; }
  th:last-of-type { width: 1px; visibility: hidden; }
`
export default ({ columns, data, onEdit, onDelete }) => {
  // Datatable requires a unique attribute to use as React Key.
  // 1. We create the key
  // 2. Since we use css to hightlight odd rows, instead of refs, we use the key
  // to determine weither if we need to change the EthAddress hover style.
  data = data.map((elem, idx) => (
    Object.assign({}, elem, { key: idx, isOdd: (idx % 2 === 0) })
  ))

  const defaultColumns = [
    {
      property: 'address',
      header: 'BTM Address',
      render: (btm, idx, ...args) => (<EthAddress address={btm.address} invertStyle={btm.isOdd}/>)
    },
    {
      property: 'buy',
      header: 'Buy',
      render: btm => (<Text>{btm.buy}</Text>),
      align: 'center',
    },
    {
      property: 'sell',
      header: 'Sell',
      render: btm => (<Text>{btm.sell}</Text>),
      align: 'center',
    },
    {
      property: 'edit',
      align: 'center',
      render: (datum) => (
        <Button
          plain
          label={<Text>edit</Text>}
          onClick={() => onEdit(datum)}
          hoverIndicator />
      )
    },
    {
      property: 'delete',
      align: 'center',
      render: (datum) => (
        <Button
          plain
          label={<Text>del</Text>}
          onClick={() => onDelete(datum)}
          hoverIndicator />
      )
    },
    {
      property: 'key',
      primary: true,
      render: () => (<></>)
    },
  ]

  return (
    <SDataTable
      margin={{ vertical: 'small'}}
      columns={columns || defaultColumns}
      data={data}
    />
  )
}
