import React from 'react'
import { Layer, Button, Box, Icon, Heading, } from 'grommet'
import styled from 'styled-components'

const SIcon = styled('img')`
  width: 50px;
  height: 50px;
`

const Wallet = ({ type, active, onClick }) => {
  const options = {
    metamask: { name: 'Metamask', icon: require('./metamask.svg') },
    ledger: { name: 'Ledger', icon: require('./ledger.svg') },
    trezor: { name: 'Trezor', icon: require('./trezor.svg') },
  }
  const { name, icon } = options[type]
  return (
    <Button disabled={!active} onClick={onClick} plain hoverIndicator>
      <Box
        direction="row"
        gap="large"
        pad={{ vertical: 'medium', horizontal: 'large'}}
        border={{ size: 'medium' }}
        align="center"
        round="xsmall"
        width="medium"
        elevation="xsmall"
        >
        <SIcon src={icon} />
        <Heading level="3">{name}</Heading>
      </Box>
    </Button>
  )
}

export default Wallet
