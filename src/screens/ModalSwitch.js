import React from 'react'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { Heading } from 'grommet'

import { Modal } from '../components'

const ModalSwitch = ({ type, children, ...props }) => {
  const location = props.location
  const history = props.history
  const state = location.state || {}
  const { dialog, params } = state
  const isModal = state ? state.modal : false

  const closeModal = () => history.push(location.pathName)

  return (
    <>
      <Modal show={isModal} close={closeModal} type={dialog} params={params} />
    </>
  )
}

export default withRouter(ModalSwitch)
