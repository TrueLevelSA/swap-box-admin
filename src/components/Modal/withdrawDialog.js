import React from 'react'
import { Heading, Text, Select, Box, Form, FormField, } from 'grommet'
import { FormClose } from 'grommet-icons'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Button, EthAddress } from 'components'
import { withdraw } from 'store'

const SFormField = styled(FormField)`
  & label {
    margin-left: 0;
    font-size: 1rem;
    font-weight: 800;
  }
  & input { padding: 11px 0; }
  & span { margin-left: 0; }
`
function WithDrawDialog({ close, account, onSubmit }) {

  const withdrawFunds = ({ value }) => onSubmit(value)

  return (
    <>
      <Box>
        <Box direction="row" justify="between">
          <Heading margin={{ vertical: 'small' }}level="4">
            Withdraw Funds
          </Heading>
          <Button alignSelf="start" onClick={close}>
            <FormClose size="medium"/>
          </Button>
        </Box>
        <Box>
          <Text margin={{ vertical: 'xsmall' }}>
            Select the amount and currency you wish to withdraw from
            the contract. The funds will be sent to
            <EthAddress address={account} bold={true} inline={true} />
            who is the current owner account.
          </Text>
          <Box pad={{ top: 'medium'}}>
            <Form
              onSubmit={withdrawFunds}>
              <Box direction="row-responsive" gap="small">
                <SFormField
                  style={{ flexGrow: '1' }}
                  name="amount"
                  label="Amount"
                  required={true}
                  placeholder="0.00" />
                <SFormField
                  style={{ width: '5rem' }}
                  name="currency"
                  label="Currency"
                  component={Select}
                  options={['ETH', 'XCHF']}
                  required={true} />
              </Box>
              <Box direction="row" justify="end">
                <Button
                  label="Withdraw"
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
  onSubmit: (value) => dispatch(withdraw(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithDrawDialog)
