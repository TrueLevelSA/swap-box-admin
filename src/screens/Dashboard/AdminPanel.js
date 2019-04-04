import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'

import { Form, Section, Modal, DataTable } from 'components'
import { DIALOG_TYPE } from 'components'

const AdminPanel = ({ route, btms }) => {
  const [modalShow, setModalShow] = useState()
  const [dialogType, setDialogType] = useState()

  const sections = [
    {
      title: 'Manage BTMs',
      description: 'Add BTMs to your contract, activate or deactive a BTM or change its fee',
      action: {
        label: 'Add BTM',
        onClick: () => {
          setDialogType(DIALOG_TYPE.BTM_ADD)
          setModalShow(true)
        }
      },
      content: (
        <DataTable
          edit={(btm) => console.log('editing', btm.address)}
          data={btms}
        />
      )
    },
    {
      title: 'Withdraw',
      description: 'Withdraw balance from the contract. The corresponding value will be transfered to the current owner',
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
      description: 'Transfer this contract to another account',
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
    <Box gap="small">
      {
        sections.map((section, index) => (
          <Section
            key={`section-${index}`}
            isDangerous={section.isDangerous}
            title={section.title}
            description={section.description}
            action={section.action}
            content={section.content}
          />
        ))
      }
      <Modal
        close={() => setModalShow(false)}
        show={modalShow}
        type={dialogType}/>
      {/*<Modal
        close={() => setModalShow(false)}
        show={true}
        type={DIALOG_TYPE.BTM_ADD} />*/}
    </Box>
  )
}

const mapStateToProps = ({ network, contract }) => ({
  authenticated: network.status === 'authenticated',
  btms: contract.btms

})

const mapDispatchToProps = dispatch => ({
  // connect: (addr) => dispatch(connect(addr))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel)
