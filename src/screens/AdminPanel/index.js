import React from 'react'
import { Box } from 'grommet'

import { Form, Section } from 'components'


const sayHello = () => {
  console.log('hello')
}

const sections = [
  {
    title: 'Manage BTMs',
    content: 'Add BTMs to your contract, activate or deactive a BTM or change its fee',
    action: {
      label: 'Add BTM',
      onSubmit: sayHello
    },
  },
  {
    title: 'Withdraw',
    content: 'Withdraw balance from the contract. The corresponding value will be transfered to the current owner',
    action: {
      label: 'Withdraw',
      onSubmit: sayHello
    },
  },
  {
    title: 'Transfer',
    content: 'Transfer this contract to another account',
    danger: true,
    action: {
      label: 'Transfer',
      onSubmit: sayHello
    },
  }
]

const AdminPanel = ({ route }) => (
  <>
    {
      sections.map((section, index) => (
        <Section
          key={index}
          danger={section.danger}
          title={section.title}
          content={section.content}
          action={section.action}
        />
      ))
    }
  </>
)

export default AdminPanel
