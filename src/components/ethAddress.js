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
const SText = styled(Text)`
  letter-spacing: -0.15em;
  margin-right: 0.1em;
`

const addrLength = 42
const visible = 10

const addressStart = (address) => (
  `${address.substr(0, Math.ceil(visible / 2) + 2)}`
)

const addressEnd = (address) => (
  `${address.substr(addrLength - Math.floor(visible / 2), addrLength) }`
)

export default ({ address = '', bold = false, inline = false, size = 'medium' }) => (
  <SContainer pad={inline ? 'small' : 'xsmall'} round="xsmall" onClick={() => copy(address)}>
    <Text size={size} weight={bold ? 'bold' : 'normal' } >{addressStart(address)}</Text>
    <SText size={size} weight={bold ? 'bold' : 'normal' } >...</SText>
    <Text size={size} weight={bold ? 'bold' : 'normal' } >{addressEnd(address)}</Text>
  </SContainer>
)
