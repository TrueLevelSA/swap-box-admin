import TransferDialog from './transferDialog'
import WithdrawDialog from './withdrawDialog'
import BtmAddDialog from './btmAddDialog'


// @TODO: find a better pattern to generate type constants
const DIALOG_TYPE = {
  BTM_ADD: 'BTM_ADD',
  WITHDRAW: 'WITHDRAW',
  TRANSFER: 'TRANSFER',
}

const DIALOGS = {
  BTM_ADD: BtmAddDialog,
  WITHDRAW: WithdrawDialog,
  TRANSFER: TransferDialog,
}

export { DIALOG_TYPE, DIALOGS }
