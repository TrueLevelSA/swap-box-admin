import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'

import { Button } from 'components'

export default () => (
  <Box fill align="center" justify="center">
    <Box direction="column" align="center">
      <Heading level="3">
        Deploy Contract
      </Heading>
      <Paragraph textAlign="center">
        This address doesn't own a contract yet.
        Please select a Metamask account with an existing contract
        or deploy a new one
      </Paragraph>
      <Button
        size="small"
        margin={{ vertical: 'medium' }}
        label="Create Contract"
        primary />
    </Box>
  </Box>
)
