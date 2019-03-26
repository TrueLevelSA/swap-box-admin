import React from 'react'
import { Text } from 'grommet'

const Currency = ({ label, value, currency }) => (
  <>
    <Text>{label}</Text>
    <Text>{value} {currency}</Text>
  </>
)

export default Currency
