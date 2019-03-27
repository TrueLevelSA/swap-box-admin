import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading } from 'grommet'
import styled from 'styled-components'

import gitlabSVG from './gitlab-icon-1-color-black-rgb.svg'

const SImg = styled('img')`
  width: 2rem;
  height: 2rem;
  margin-bottom: -0.2rem;
`

export default () => (
  <Box direction="row" align="center" justify="end">
    {/*<Heading level="5" margin={{ vertical: 'none' }}>Footer</Heading>*/}
    <a href="https://gitlab.com/atola/swap-box-admin" target="_blank">
      <SImg src={gitlabSVG} />
    </a>
  </Box>
)
