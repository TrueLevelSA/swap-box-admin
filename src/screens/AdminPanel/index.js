import React from 'react'
import { Box } from 'grommet'

import { Form } from 'components'

const sayHello = () => {
  console.log('hello')
}

const AdminPanel = ({ route }) => (
  <>
    <Box>
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

export default AdminPanel
