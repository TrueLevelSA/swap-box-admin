import React from 'react'
import { Box } from 'grommet'

import { Button } from 'components'

const WithdrawDialog = ({ close }) => (
  <>
    <Box>
      Transfer
      <Button label='close' onClick={close} />
    </Box>
  </>
)

export default WithdrawDialog
