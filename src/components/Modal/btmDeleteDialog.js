import React, { useState } from 'react'
import { Heading, Text, Select, Box, Form, FormField, } from 'grommet'
import { FormClose } from 'grommet-icons'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Button, EthAddress } from 'components'
import { deleteBTM } from 'store'

function BtmDeleteDialog({ close, onDelete, params: machineInfo }) {
  const { address } = machineInfo

  return (
    <>
      <Box>
        <Box direction="row" justify="between">
          <Heading margin={{ vertical: 'small' }}level="4">
            Delete BTM
          </Heading>
          <Button alignSelf="start" onClick={close}>
            <FormClose size="medium"/>
          </Button>
        </Box>
        <Box>
          <Text margin={{ vertical: 'xsmall' }}>
            You are about to remove the BTM
          </Text>
          <EthAddress address={address} />
          <Text bold>
            from this contract. This cannot be undone.
          </Text>
          <Box pad={{ top: 'medium'}}>
            <Box direction="row" justify="end">
              <Button
                label="Delete BTM"
                onClick={() => onDelete(address).then(close)}
                margin={{ top: 'medium', bottom: 'small' }}
                color="status-critical"/>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

// @TODO this component should be presentational
// Once modal is abstracted we should no longer need a store.
const mapDispatchToProps = dispatch => ({
  onDelete: (btm) => dispatch(deleteBTM(btm))
})

export default connect(
  null,
  mapDispatchToProps
)(BtmDeleteDialog)
