// @flow

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { walletsLoaded, walletsLoadingError, exchangeError, setFromWallet, setToWallet, loadWallets, exchange } from 'actions/walletsActions';
import { selectFromWallet, selectToWallet, selectAmount } from 'selectors/walletsSelectors';
import { walletType } from 'types';
import { walletsApiUrl } from 'constants/urls';
import request from 'utils/request';

export function* getWalletsSaga() {
  try {
    const wallets = yield call(request, walletsApiUrl, 'GET');

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

export function* exchangeSaga() {
  try {
    const amount = yield select(selectAmount());
    const fromWalletId = yield select(selectFromWallet());
    const toWalletId = yield select(selectToWallet());

    yield call(request, walletsApiUrl, 'POST', JSON.stringify({ amount, fromWalletId, toWalletId }));
    yield put(loadWallets());
  } catch (err) {
    yield put(exchangeError(err));
  }
}

export function* setFromWalletToLocalStorageSaga({ payload }) {
  yield localStorage.setItem('from', payload.currency);
}

export function* setToWalletToLocalStorageSaga({ payload }) {
  yield localStorage.setItem('to', payload.currency);
}

export default function* walletSagas() {
  yield takeLatest(loadWallets, getWalletsSaga);
  yield takeLatest(exchange, exchangeSaga);
  yield takeLatest(setFromWallet, setFromWalletToLocalStorageSaga);
  yield takeLatest(setToWallet, setToWalletToLocalStorageSaga);
}
