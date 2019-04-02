import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'
import { connect } from 'react-redux'

import { Button } from 'components'
import { deploy } from 'store/swap.action'
import { initNetworkAction } from 'store/network.action'

function Deploy({ deploy, authenticated, initNetworkAction }) {

  const deployContract = async () => {
    if (authenticated) {
      await deploy().then(() => console.log('deploy!'))
    } 
  }

  return (
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
          onClick={deployContract}
          primary />
      </Box>
    </Box>
  )
}

const mapStateToProps = ({ network }) => ({
  authenticated: network.status === 'authenticated'
})

const mapDispatchToProps = dispatch => ({
  deploy: () => dispatch(deploy()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deploy)
