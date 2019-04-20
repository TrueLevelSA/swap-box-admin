import React from 'react'
import { toast } from 'react-toastify'

import { Settings } from 'services'
import { TxToast } from 'components'

export function sendTransaction(tx, onRequest = () => {}, onSuccess) {
  return async (dispatch) => {
    const { hash } = tx
    let toastId = null;
    try {
      await onRequest()
      toastId = toast(
        () => <TxToast hash={hash} message={"Waiting confirmation for transaction"} />,
        { type: toast.TYPE.INFO}
      )

      const { confirmation } = await tx.wait(Settings.system.confirmationsToWaitFor)

      toast.update(toastId, {
        type: toast.TYPE.SUCCESS,
        render: <TxToast hash={hash} message={"Transaction confirmed!"} confirmation={confirmation}/>
      })

      await onSuccess()
      // toast.dismiss(toastId)
    } catch (e) {
      console.debug('Transaction error', e)
      toast.update(toastId, {
        type: toast.TYPE.ERROR,
        render: <TxToast hash={hash} message={`Error when sending transaction: ${e}`} />
      })
    }
  }
}

export function handleSigningError(error, onError = () => {}) {
  return async (dispatch) => {
    await onError()
    toast.error(
      () => <TxToast error={error.message} message={"Failed to prepare transaction"} />
    )
  }
}
