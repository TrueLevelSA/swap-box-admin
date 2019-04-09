import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Box, Heading, Paragraph } from 'grommet'
import { connect } from 'react-redux'

import { Button } from 'components'
import { deployContract } from 'store'

function Deploy({ deploy, authenticated }) {
  const [toAdmin, setToAdmin] = useState(false)

  const deployContract = async () => {
    await deploy()
    setToAdmin(true)
  }

  if (toAdmin) {
    return <Redirect to="/dashboard/admin" />
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
          or deploy a new one.
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

const mapDispatchToProps = dispatch => ({
  deploy: () => dispatch(deployContract()),
})

export default connect(
  null,
  mapDispatchToProps
)(Deploy)
