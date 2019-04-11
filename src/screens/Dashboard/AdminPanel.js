import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Box } from 'grommet'

import { Form, Section, Modal, DIALOG_TYPE, DataTable } from 'components'

const AdminPanel = ({ history, route, btms = [] }) => {
  const openModal = (dialogType, params) => {
    history.push(route.path, { modal: true, dialog: dialogType, params: params })
  }

  const sections = [
    {
      title: 'Manage BTMs',
      description: 'Add BTMs to your contract, activate or deactive a BTM or change its fee',
      action: {
        label: 'Add BTM',
        onClick: () => openModal(DIALOG_TYPE.BTM_ADD)
      },
      content: btms.length > 0 ? (
          <DataTable
            edit={(btm) => openModal(DIALOG_TYPE.BTM_EDIT, btm)}
            data={btms.map(({ address, buy, sell }) => ({
              address,
              buy: buy.toString(),
              sell: sell.toString()
            })) } />
        ) : null
    },
    {
      title: 'Withdraw',
      description: 'Withdraw balance from the contract. The corresponding value will be transfered to the current owner',
      action: {
        label: 'Withdraw',
        onClick: () => openModal(DIALOG_TYPE.WITHDRAW)
      },
    },
    {
      title: 'Transfer',
      description: 'Transfer this contract to another account',
      isDangerous: true,
      action: {
        label: 'Transfer',
        onClick: () => openModal(DIALOG_TYPE.TRANSFER)
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
    </Box>
  )
}

const mapStateToProps = ({ data }) => ({
  btms: data.btms
})

const mapDispatchToProps = dispatch => ({
  // connect: (addr) => dispatch(connect(addr))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminPanel))
