import React from 'react'
import { Box, Text, defaultProps } from 'grommet'
import copy from 'copy-to-clipboard';
import styled from 'styled-components'

const SContainer = styled(Box)`
  display: inline;
  &:hover {
    background: ${defaultProps.theme.global.colors['light-3']};
  }
`
const addrLength = 42

const truncateCenter = (address, compact = true) => {
  const visible = 10
  const start = Math.ceil(visible / 2)
  const end = Math.floor(visible / 2)

  const displayAddress = compact ? (
    `${address.substr(0, (start + 2))}${visible < addrLength ? '...' : ''}${address.substr(addrLength - end, addrLength)}`
  ) : address;

  return displayAddress
}

export default ({ address = '', bold = false, inline = false, size = 'medium' }) => (
  <SContainer pad={inline ? 'small' : 'xsmall'} round="xsmall" onClick={() => copy(address)}>
    <Text size={size} weight={bold ? 'bold' : 'normal' } >{truncateCenter(address)}</Text>
  </SContainer>
)
