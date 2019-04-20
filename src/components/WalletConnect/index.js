import React from 'react'
import styled from 'styled-components'
import { Button, Box, Heading, } from 'grommet'

const SIcon = styled('img')`
  width: 45px;
  height: 45px;
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
        pad={{ vertical: 'small', horizontal: 'medium'}}
        border={{ size: 'small' }}
        align="center"
        round="xxsmall"
        width="medium"
        elevation="small">
        <SIcon src={icon} />
        <Heading level="3">{name}</Heading>
      </Box>
    </Button>
  )
}

export default Wallet
