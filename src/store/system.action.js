import { Web3Service } from 'services';

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

function setAuth(service) {
  return async dispatch => {
    const signer = await service.getSigner();
    const networkName = await service.getNetwork();
    const address = await signer.getAddress();

    dispatch({
      type: 'AUTH_SUCCESS',
      payload: {
        userAccount: address,
        networkName,
      },
    });
  };
}
