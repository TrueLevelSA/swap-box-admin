import React, { useState } from 'react'
import { connect } from 'react-redux'
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
        onClick: () => {
          setDialogType(DIALOG_TYPE.BTM_ADD)
          setModalShow(true)
        }
      },
    },
    {
      title: 'Withdraw',
      content: 'Withdraw balance from the contract. The corresponding value will be transfered to the current owner',
      action: {
        label: 'Withdraw',
        onClick: () => {
          setDialogType(DIALOG_TYPE.WITHDRAW)
          setModalShow(true)
        }
      },
    },
    {
      title: 'Transfer',
      content: 'Transfer this contract to another account',
      isDangerous: true,
      action: {
        label: 'Transfer',
        onClick: () => {
          setDialogType(DIALOG_TYPE.TRANSFER)
          setModalShow(true)
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
      {/*<Modal
        close={() => setModalShow(false)}
        show={modalShow}
        type={dialogType}/>*/}
      <Modal
        close={() => setModalShow(false)}
        show={true}
        type={DIALOG_TYPE.BTM_ADD} />
    </Box>
  )
}

const mapStateToProps = ({ network }) => ({
  authenticated: network.status === 'authenticated'
})

const mapDispatchToProps = dispatch => ({
  // connect: (addr) => dispatch(connect(addr))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel)
