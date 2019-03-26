import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'

import Routes from 'routes'
import { Currency, TextInput, Button, Form } from 'components'

const sayHello = () => {
  console.log('hello')
}

const Home = () => (
  <>
    <Box>
      <Currency label="EthBalance" value="100" currency="ETH"/>
      <Currency label="BaseToken" value="2345" currency="xCHF"/>
      <Form label="Add BTM" actionLabel="hello" onSubmit={sayHello}/>
      <Form label="Change Fee" actionLabel="change" onSubmit={sayHello}/>
      <Form label="Withdraw" actionLabel="withdraw" onSubmit={sayHello}/>
      <Form label="Transfer" actionLabel="transfer" onSubmit={sayHello}/>
    </Box>
    <Box>
    </Box>
    <Box>
    </Box>
  </>
)

export default Home
