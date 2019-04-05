import React from 'react'
import { Heading, Text, Select, Box, Form, FormField, } from 'grommet'
import { FormClose } from 'grommet-icons'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Button } from 'components'
import { addBTM } from 'store'

const SFormField = styled(FormField)`
  & label {
    margin-left: 0;
    font-size: 1rem;
    font-weight: 800;
  }
  & input { padding: 11px 0; }
  & span { margin-left: 0; }
`
function BtmAddDialog({ close, onSubmit }) {

  return (
    <>
      <Box>
        <Box direction="row" justify="between">
          <Heading margin={{ vertical: 'small' }}level="4">
            Add BTM
          </Heading>
          <Button alignSelf="start" onClick={close}>
            <FormClose size="medium"/>
          </Button>
        </Box>
        <Box>
          <Text margin={{ vertical: 'xsmall' }}>
            Add the address of a BTM in order to connect it with your
            SwapBox contract.
          </Text>
          <Box pad={{ top: 'medium'}}>
            <Form
              onSubmit={({ value }) => onSubmit(value)}>
              <SFormField
                style={{ flexGrow: '1' }}
                name="btmAddress"
                label="BTM Address"
                required={true}
                placeholder="0xe923f..." />
              <Box direction="row" justify="end">
                <Button
                  label="Add BTM"
                  type="submit"
                  margin={{ top: 'medium', bottom: 'small' }}
                  primary/>
              </Box>
            </Form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

// @TODO currently we rely on the connected account to display contract
// owner. This should actually be the owner fetched from the contract
const mapStateToProps = ({ auth }) => ({
  account: auth.userAccount
})

// @TODO this component should be presentational
// Once modal is abstracted we should no longer need a store.
const mapDispatchToProps = dispatch => ({
  onSubmit: ({ address, buyerFee, sellerFee }) => dispatch(addBTM(address, buyerFee, sellerFee))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtmAddDialog)
