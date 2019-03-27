import React, { useState } from 'react'
import { Box } from 'grommet'

import { Form, Section, Modal } from 'components'
import { DIALOG_TYPE } from 'components'

const AdminPanel = ({ route }) => {
  const [modalShow, setModalShow] = useState()
  const [dialogType, setDialogType] = useState()

  const sections = [
    {
      title: 'Manage BTMs',
      content: 'Add BTMs to your contract, activate or deactive a BTM or change its fee',
      action: {
        label: 'Add BTM',
        onSubmit: () => {
          setModalShow(true)
          setDialogType(DIALOG_TYPE.BTM_ADD)
        }
      },
    },
    {
      title: 'Withdraw',
      content: 'Withdraw balance from the contract. The corresponding value will be transfered to the current owner',
      action: {
        label: 'Withdraw',
        onSubmit: () => {
          setModalShow(true)
          setDialogType(DIALOG_TYPE.WITHDRAW)
        }
      },
    },
    {
      title: 'Transfer',
      content: 'Transfer this contract to another account',
      isDangerous: true,
      action: {
        label: 'Transfer',
        onSubmit: () => {
          setModalShow(true)
          setDialogType(DIALOG_TYPE.TRANSFER)
        }
      },
    }
  ]


  return (
    <Box gap="medium">
      {
        sections.map((section, index) => (
          <Section
            key={`section-${index}`}
            isDangerous={section.isDangerous}
            title={section.title}
            content={section.content}
            action={section.action}
          />
        ))
      }
      <Modal show={modalShow} close={() => setModalShow(false)} type={dialogType}/>
      {/*<Modal show={true} close={() => setModalShow(false)} type={DIALOG_TYPE.TRANSFER}/>*/}
    </Box>
  )
}
export default AdminPanel
