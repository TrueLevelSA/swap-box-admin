import TransferDialog from './transferDialog'
import WithdrawDialog from './withdrawDialog'
import BtmAddDialog from './btmAddDialog'
import BtmEditDialog from './btmEditDialog'

// @TODO: find a better pattern to generate type constants
const DIALOG_TYPE = {
  BTM_ADD: 'BTM_ADD',
  BTM_EDIT: 'BTM_EDIT',
  WITHDRAW: 'WITHDRAW',
  TRANSFER: 'TRANSFER',
}

const DIALOGS = {
  BTM_ADD: BtmAddDialog,
  BTM_EDIT: BtmEditDialog,
  WITHDRAW: WithdrawDialog,
  TRANSFER: TransferDialog,
}

export { DIALOG_TYPE, DIALOGS }
