import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('wallet');

const selectRoute = (state) => state.get('route');

const selectWallets = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('wallets')
);

const selectFromWallet = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('fromWallet')
);

const selectToWallet = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('toWallet')
);

const selectAmount = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('amount')
);

const selectWalletsLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const selectWalletsError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const selectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  selectWallets,
  selectFromWallet,
  selectToWallet,
  selectAmount,
  selectWalletsLoading,
  selectWalletsError,
  selectLocation,
};
