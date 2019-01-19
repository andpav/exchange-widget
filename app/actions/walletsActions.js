import { createAction } from 'redux-actions';

export const loadWallets = createAction('LOAD_WALLETS');
export const walletsLoaded = createAction('LOAD_WALLETS_SUCCESS');
export const walletsLoadingError = createAction('LOAD_WALLETS_ERROR');

export const setFromWallet = createAction('SET_FROM_WALLET');
export const setToWallet = createAction('SET_TO_WALLET');
export const setAmount = createAction('SET_AMOUNT');
export const exchange = createAction('EXCHANGE');
export const exchangeError = createAction('EXCHANGE_ERROR');
