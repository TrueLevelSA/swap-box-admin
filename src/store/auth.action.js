export function setAuth() {
  return async (dispatch, getState) => {
    const {
      system: { web3Service: service },
    } = getState();

    if (service) {
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
    }
  };
}
