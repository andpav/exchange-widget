// @flow
import { put, takeLatest } from 'redux-saga/effects';
import { walletsLoaded, walletsLoadingError, setFromWallet, setToWallet, loadWallets } from 'actions/walletsActions';
import { wallets } from 'mocks';
import { walletType } from 'types';

export function* getWallets() {
  try {
    // wallets request place here
    if (!Array.isArray(wallets) || wallets.length < 2) {
      throw new Error('incorrect data!');
    }

    const fromWalletCurrency = yield localStorage.getItem('from');
    const toWalletCurrency = yield localStorage.getItem('to');

    const fromWallet = yield fromWalletCurrency ? wallets.find((wallet: walletType) => wallet.currency === fromWalletCurrency) : null;
    const toWallet = yield toWalletCurrency ? wallets.find((wallet: walletType) => wallet.currency === toWalletCurrency) : null;

    yield put(setFromWallet(fromWallet || wallets[0]));
    yield put(setToWallet(toWallet || wallets[1]));
    yield put(walletsLoaded(wallets));
  } catch (err) {
    yield put(walletsLoadingError(err));
  }
}

export function* setFromWalletToLocalStorage({ payload }) {
  yield localStorage.setItem('from', payload.currency);
}

export function* setToWalletToLocalStorage({ payload }) {
  yield localStorage.setItem('to', payload.currency);
}

export default function* walletSagas() {
  yield takeLatest(loadWallets, getWallets);
  yield takeLatest(setFromWallet, setFromWalletToLocalStorage);
  yield takeLatest(setToWallet, setToWalletToLocalStorage);
}
