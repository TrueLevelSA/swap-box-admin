import React from 'react'
import { Heading, Paragraph, Box, Form, FormField, } from 'grommet'
import { FormClose } from 'grommet-icons'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Button } from 'components'
import { transferOwnership } from 'store/swap.action'

const SFormField = styled(FormField)`
  & label {
    margin-left: 0;
    font-size: 1rem;
    font-weight: 800;
  }
  & input { padding: 11px 0; }
  & span { margin-left: 0; }
`
const SOl = styled('ol')`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

function TransferDialog({ close, onSubmit }) {

  return (
    <>
      <Box>
        <Box direction="row" justify="between">
          <Heading margin={{ vertical: 'small' }}level="4">Transfer</Heading>
          <Button alignSelf="start" onClick={close}>
            <FormClose size="medium"/>
          </Button>
        </Box>
        <Box>
          <Paragraph margin={{ vertical: 'xsmall' }}>
            Enter the address you want to transfer
            this contract too. Remember:
          </Paragraph>
          <SOl>
            <li>An address can only own one contract.</li>
            <li>A transfer cannont be reverted.</li>
          </SOl>
          <Box pad={{ top: 'medium'}}>
            <Form onSubmit={({ value }) => onSubmit(value.owner) }>
              <SFormField
                name="owner"
                label="New owner"
                required={true}
                placeholder="address"/>
              <Button
                label="Transfer"
                type="submit"
                margin={{ top: 'medium', bottom: 'small' }}
                primary/>
            </Form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

// @TODO this should be presentational
// Once modal is abstracted we should no longer need a store.

const mapDispatchToProps = dispatch => ({
  onSubmit: (owner) => dispatch(transferOwnership(owner))
})

export default connect(
  null,
  mapDispatchToProps
)(TransferDialog)
