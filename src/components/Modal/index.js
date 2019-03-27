import React from 'react'
import { Layer, Box } from 'grommet'

import { DIALOG_TYPE, DIALOGS } from './types'

const Modal = ({ show, close, type }) => {
  const Dialog = DIALOGS[type]
  return (
    <>
      {
        show && (
          <Layer
            onEsc={close}
            onClickOutside={close}>
            <Box pad="medium">
              <Dialog close={close} />
            </Box>
          </Layer>
        )
      }
    </>
)}

export { DIALOG_TYPE, Modal as default }
