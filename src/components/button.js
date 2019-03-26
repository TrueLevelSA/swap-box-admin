import React from 'react'
import { Button } from 'grommet'

const SButton = ({ children, ...props }) => (
  <Button {...props}>
    {children}
  </Button>
)

export default SButton
