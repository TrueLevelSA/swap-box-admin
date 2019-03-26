import React from 'react'
import styled from 'styled-components'

const square = '100px';
const Container = styled('div')`
  width: ${square};
  height: ${square};
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`

const QrCode = ({ address }) => (
  <>
    <Container>{address}</Container>
  </>
)

export default QrCode
