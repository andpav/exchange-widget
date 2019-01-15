import { createSelector } from 'reselect';

const selectWalletsState = (state) => state.get('wallet');

const selectWallets = () => createSelector(
  selectWalletsState,
  (globalState) => globalState.get('wallets')
);

const selectFromWallet = () => createSelector(
  selectWalletsState,
  (globalState) => globalState.get('fromWallet')
);

const selectToWallet = () => createSelector(
  selectWalletsState,
  (globalState) => globalState.get('toWallet')
);

const selectAmount = () => createSelector(
  selectWalletsState,
  (globalState) => globalState.get('amount')
);

const selectWalletsLoading = () => createSelector(
  selectWalletsState,
  (globalState) => globalState.get('loading')
);

const selectWalletsError = () => createSelector(
  selectWalletsState,
  (globalState) => globalState.get('error')
);

export {
  selectWalletsState,
  selectWallets,
  selectFromWallet,
  selectToWallet,
  selectAmount,
  selectWalletsLoading,
  selectWalletsError,
};
