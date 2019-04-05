import React from 'react'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { Heading } from 'grommet'

import { Modal } from 'components'


/*
  Places a Modal in the DOM and on every route change will display the overlay
  if location.state.modal === true. Default close behaviour is to navigate to
  the existing route.
*/
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
