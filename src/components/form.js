import React from 'react'
import { Box, Form, FormField } from 'grommet'

import { Button } from './index'

const SForm = ({ label, actionLabel, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Box
      direction='row'
      align='center'
      background='light-2'
      pad={{ vertical: 'small', horizontal: 'medium' }}
    >
      <FormField name={label} label={label} required={true} />
      <Button type="submit" label={actionLabel} primary/>
    </Box>
  </Form>
)

export default SForm
