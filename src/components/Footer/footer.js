import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import styled from 'styled-components'

import { pathByName, routes } from 'routes'
import gitlabSVG from './gitlab-icon-1-color-black-rgb.svg'

const SImg = styled('img')`
  width: 2rem;
  height: 2rem;
  margin-bottom: -0.2rem;
`


export default () => {
  const isDev = true // @TODO expose links only in dev environment
  const paths = pathByName(routes)
  return (
    <Box direction="row" align="center" justify="between">
      { isDev && (
          <Box direction="row" gap="xsmall">
            <Link to={paths.deploy}>Deploy</Link>
            <Link to={paths.admin}>Admin</Link>
            <Link to={paths.connect}>Connect</Link>
          </Box>
        )
      }
      <a href="https://gitlab.com/atola/swap-box-admin" target="_blank">
        <SImg src={gitlabSVG} />
      </a>
    </Box>
  )
}
