import React from 'react'
import QRCode from 'qrcode.react'
import { defaultProps } from 'grommet'
import styled from 'styled-components'

import { theme } from 'theme'

const SContainer = styled('div')`
  border: 1px solid ${props => props.borderColor || defaultProps.theme.global.colors.brand};
  height: ${theme.qrCode.size}px;
  width: ${theme.qrCode.size}px;
`

const SQRCode = styled(QRCode)``

export default ({ address, borderColor }) => (
  <SContainer borderColor={borderColor}>
    <SQRCode
      value={address}
      includeMargin
      renderAs="svg"
      size={theme.qrCode.size}
      />
  </SContainer>
)
