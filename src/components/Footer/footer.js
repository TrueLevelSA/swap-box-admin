import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { Button, TxToast } from 'components'
import { pathByName, routes } from 'routes'
import gitlabSVG from './gitlab-icon-1-color-black-rgb.svg'

const SImg = styled('img')`
  width: 2rem;
  height: 2rem;
  margin-bottom: -0.2rem;
`

const toastMe = (id) => {
  toast.update(id, {
    render: <TxToast />,
    type: toast.TYPE.SUCCESS
  })
}

export default () => {
  const isDev = true // @TODO expose links only in dev environment
  const paths = pathByName(routes)
  // const id = toast(
  //   ( closeButton ) => {
  //     return <TxToast hash={"0xb196b1a8a93931fdcc870e62559ecc79ec09d269a8e699d3f86d1fefc1a42974"} message="Hello world"/>
  //   },
  //   {
  //     autoClose: false,
  //     type: toast.TYPE.INFO
  //   }
  // )

  return (
    <Box direction="row" align="center" justify="between">
      { isDev && (
          <Box direction="row" gap="xsmall">
            <Link to={paths.deploy}>Deploy</Link>
            <Link to={paths.admin}>Admin</Link>
            <Link to={paths.connect}>Connect</Link>
            <Button onClick={(id) => toastMe(id)}>Update</Button>
          </Box>
        )
      }
      <a target="_blank" rel="noopener noreferrer"
        href="https://gitlab.com/atola/swap-box-admin">
        <SImg src={gitlabSVG} />
      </a>
    </Box>
  )
}
