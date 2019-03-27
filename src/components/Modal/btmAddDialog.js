import React from 'react'
import { Box } from 'grommet'

import { Button } from 'components'

const BtmAddDialog = ({ close }) => (
  <>
    <Box>
      Add Btm
      <Button label='close' onClick={close} />
    </Box>
  </>
)

export default BtmAddDialog
