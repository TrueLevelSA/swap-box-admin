import { Web3Service } from 'services';
import { setAuth } from './auth.action';

let WEB3_INITIALISED = false;

export function initSystem(type) {
  return async dispatch => {
    if (type === 'METAMASK') {
      try {
        const service = await new Web3Service().init(window.web3);

        window.SERVICE = service;
        await dispatch(setService(service));
        await dispatch(setAuth(service));

        // Make sure we only set one Event listener.
        if (!WEB3_INITIALISED) {
          // Update store on account change.
          window.ethereum.on('accountsChanged', async function(accounts) {
            console.debug('Account changed to', accounts);
            await dispatch(setAuth(service));
          });
          WEB3_INITIALISED = true;
        }
      } catch (err) {
        dispatch({ type: 'AUTH_FAILURE' });
        throw new Error(err);
      }
    }
  };
}

function setService(service) {
  return async dispatch => {
    dispatch({
      type: 'SYSTEM_INIT_WEB3',
      payload: { web3Service: service },
    });
  };
}
