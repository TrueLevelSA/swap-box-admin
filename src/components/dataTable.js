import React from 'react'
import styled from 'styled-components'
import { Box, DataTable, Text, defaultProps } from 'grommet'

import { Button, EthAddress } from 'components'

const SDataTable = styled(DataTable)`

  table-layout: fixed;
  width: 100%;

  tbody > tr:nth-child(odd) { background: ${defaultProps.theme.global.colors['light-3']}};

  th:nth-of-type(2), th:nth-of-type(3), th:nth-of-type(4) {
    text-align: center;
  }
  th:nth-of-type(1) {
    width: 40% !important;
  }

  th:nth-of-type(4) {
    width: 5em !important;
  }


`



export default ({ columns, data, edit }) => {
  // BTM address
  // BTM buyer fee
  // BTM seller fee
  // Action: edit
  return (
    <SDataTable
      margin={{ vertical: 'small'}}
      columns={[
        {
          property: 'address',
          header: 'BTM Address',
          primary: true,
          render: btm => (<EthAddress address={btm.address} />)
        },
        {
          property: 'buy',
          header: 'Buyer',
          render: btm => (
            <Box fill >
              <Text textAlign="center">{btm.buy}</Text>
            </Box>
          )
        },
        {
          property: 'sell',
          header: 'Seller',
          render: btm => (
            <Box fill>
              <Text textAlign="center">{btm.sell}</Text>
            </Box>
          )
        },
        {
          property: 'action',
          render: (datum) => (
            <Button
              plain
              label={<Text>edit</Text>}
              onClick={() => edit(datum)}
              hoverIndicator />
          )
        }
      ]}
      data={data}
    />
  )
}
