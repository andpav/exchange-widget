import {
  LOAD_WALLETS,
  LOAD_WALLETS_SUCCESS,
  LOAD_WALLETS_ERROR,
  SET_FROM_WALLET,
  SET_TO_WALLET,
  SET_AMOUNT,
} from './walletsConstants';

export function loadWallets() {
  return {
    type: LOAD_WALLETS,
  };
}

export function walletsLoaded(wallets) {
  return {
    type: LOAD_WALLETS_SUCCESS,
    payload: wallets,
  };
}

export function walletsLoadingError(error) {
  return {
    type: LOAD_WALLETS_ERROR,
    payload: error,
  };
}

export function setFromWallet(wallet) {
  return {
    type: SET_FROM_WALLET,
    payload: wallet,
  };
}

export function setToWallet(wallet) {
  return {
    type: SET_TO_WALLET,
    payload: wallet,
  };
}


export function setAmount(amount) {
  return {
    type: SET_AMOUNT,
    payload: amount,
  };
}
