import React from 'react'
import QRCode from 'qrcode.react'
import { Box } from 'grommet'
import styled from 'styled-components'

import { theme } from 'theme'

const SQRCode = styled(QRCode)``

export default ({ address }) => (
  <Box border={{ size: 'xsmall', color: 'brand' }} height={`${theme.qrCode.size + 2}px`}>
    <SQRCode
      value={address}
      includeMargin
      renderAs="svg"
      size={theme.qrCode.size}
      />
  </Box>
)
