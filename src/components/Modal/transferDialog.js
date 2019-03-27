import React from 'react'
import { Heading, Paragraph, Box, Form, FormField, } from 'grommet'
import { FormClose } from 'grommet-icons'
import styled from 'styled-components'

import { Button, TextInput } from 'components'

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

const TransferDialog = ({ close }) => (
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
          <SOl>
            <li>An address can only own one contract.</li>
            <li>A transfer cannont be reverted.</li>
          </SOl>
        </Paragraph>
        <Box pad={{ top: 'medium'}}>
          <Form>
            <SFormField name="owner" label="New owner" required={true} >
              <TextInput placeholder="address" />
            </SFormField>
            <Box direction="row" justify="end">
              <Button
                label="Transfer"
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

export default TransferDialog
