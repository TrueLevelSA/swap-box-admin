import React from 'react'
import styled from 'styled-components'
import { Box, DataTable, Text, defaultProps } from 'grommet'

import { Button, EthAddress } from 'components'

const SDataTable = styled(DataTable)`
  tbody > tr:nth-child(odd) { background: ${defaultProps.theme.global.colors['light-3']}};
  table-layout: fixed;
  width: 100%;
  th:nth-of-type(2), th:nth-of-type(3){ text-align: center; }
  th:nth-of-type(1) { width: 40% !important; }
  th:nth-of-type(4), th:nth-of-type(5) { width: 4rem !important; }
  th:last-of-type { width: 1px; visibility: hidden; }
`
export default ({ columns, data, onEdit, onDelete }) => {
  data = data.map((elem, idx) => Object.assign({}, elem, { key: idx }))
  const defaultColumns = [
    {
      property: 'address',
      header: 'BTM Address',
      render: btm => (<EthAddress address={btm.address} />)
    },
    {
      property: 'buy',
      header: 'Buy',
      render: btm => (
        <Box alignSelf="center">
          <Text textAlign="center">{btm.buy}</Text>
        </Box>
      )
    },
    {
      property: 'sell',
      header: 'Sell',
      render: btm => (
        <Box alignSelf="center">
          <Text textAlign="center">{btm.sell}</Text>
        </Box>
      )
    },
    {
      property: 'edit',
      render: (datum) => (
        <Box alignSelf="center">
          <Button
            plain
            label={<Text>edit</Text>}
            onClick={() => onEdit(datum)}
            hoverIndicator />
        </Box>
      )
    },
    {
      property: 'delete',
      render: (datum) => (
        <Box alignSelf="center">
          <Button
            plain
            label={<Text>del</Text>}
            onClick={() => onDelete(datum)}
            hoverIndicator />
        </Box>
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
