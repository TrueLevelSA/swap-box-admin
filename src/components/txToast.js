import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'

import { utils } from 'services'

const Sa = styled('a')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 280px;
`

const Toast = ({ hash, error, message }) => {
  const etherscan = utils.getEtherscanLink(null, hash)

  return (
    <>
      <Text margin={{ vertical: 'small' }}>
        {message}
      </Text>

      {
        hash && (<div style={{ maxWidth: '100%'}}>
          <Sa href={etherscan} target="_blank">{hash}</Sa>
        </div>)
      }
      {
        error && (
          <div>
            <Text size="xsmall">{error}</Text>
          </div>
        )
      }
    </>
  )
}

export default Toast
