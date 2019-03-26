import React from 'react'
import styled from 'styled-components'

import { Button } from 'components'

const SCentered = styled('div') `
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`

export default () => (
  <>
    <SCentered>
      <h4>
        This address doesn't own a contract yet.
        Please select a Metamask account with an existing contract
        or deploy a new one
      </h4>
      <Button>
        Create Contract
      </Button>
    </SCentered>
  </>
)
