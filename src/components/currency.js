import React from 'react'
import { Heading, Box } from 'grommet'
import styled from 'styled-components'

const SValue = styled(Heading)``

const getLevel = size => (
  size === 'large' ? 2 : 3
)

const formatValue = value => (
  value
)


const Currency = ({ label, value, currency, size, ...props }) => (
  <Box direction="row" justify="end" align="center">
    <SValue {...props } margin={{ right: '12px', top: '0', bottom: '0.2em' }} level={getLevel(size)}>{formatValue(value)}</SValue>
    <Heading {...props} margin={{ top: '0', bottom: '0.2em' }} level={getLevel(size)}>{currency}</Heading>
  </Box>
)

export default Currency
