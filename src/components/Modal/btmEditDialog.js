import React, { useState } from 'react'
import { Heading, Text, Select, Box, Form, FormField, } from 'grommet'
import { FormClose } from 'grommet-icons'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Button, EthAddress } from 'components'
import { editBTM } from 'store'

const SFormField = styled(FormField)`
  & label {
    margin-left: 0;
    font-size: 1rem;
    font-weight: 800;
  }
  & input { padding: 11px 0; }
  & span { margin-left: 0; }
`
function BtmEditDialog({ close, onSubmit, params: machineInfo }) {
  const { address, buy, sell } = machineInfo    // Info is transformed in section datatable
  const [ buyerFee, setBuyerFee ] = useState(buy)
  const [ sellerFee, setSellerFee ] = useState(sell)

  return (
    <>
      <Box>
        <Box direction="row" justify="between">
          <Heading margin={{ vertical: 'small' }}level="4">
            Edit BTM
          </Heading>
          <Button alignSelf="start" onClick={close}>
            <FormClose size="medium"/>
          </Button>
        </Box>
        <Box>
          <Text margin={{ vertical: 'xsmall' }}>
            Edit the params of the BTM <EthAddress address={address} />
          </Text>
          <Box pad={{ top: 'medium'}}>
            <Form
              onSubmit={() => onSubmit({
                address,
                buy: buyerFee,
                sell: sellerFee
              })}>
              <Box direction="row-responsive" gap="small" justify="between">
                <SFormField
                  name="buyerFee"
                  label="Buyer Fee"
                  type="number"
                  value={buyerFee}
                  onChange={e => setBuyerFee(e.target.value)}
                  placeholder="0.00" />
                <SFormField
                  name="sellerFee"
                  label="Seller Fee"
                  type="number"
                  value={sellerFee}
                  onChange={e => setSellerFee(e.target.value)}
                  placeholder="0.00" />
              </Box>
              <Box direction="row" justify="end">
                <Button
                  label="Edit BTM"
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
  onSubmit: (btm) => dispatch(editBTM(btm))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtmEditDialog)
