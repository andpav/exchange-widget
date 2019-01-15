import { put, takeLatest } from 'redux-saga/effects';
import { walletsLoaded, walletsLoadingError, setFromWallet, setToWallet, loadWallets } from 'actions/walletsActions';

export function* getWallets() {
  try {
    // wallets request place here
    /* eslint-disable */
    const wallets = [
      { id: '0', currency: 'USD', balance: 15.15, sign: '$' },
      { id: '1', currency: 'EUR', balance: 30.30, sign: '€' },
      { id: '2', currency: 'GBP', balance: 0, sign: '£' },
    ];
    /* eslint-enable */

    if (!Array.isArray(wallets) || wallets.length < 2) {
      throw new Error('incorrect data!');
    }

    yield put(setFromWallet(wallets[0]));
    yield put(setToWallet(wallets[1]));
    yield put(walletsLoaded(wallets));
  } catch (err) {
    yield put(walletsLoadingError(err));
  }
}

export default function* walletSagas() {
  yield takeLatest(loadWallets, getWallets);
}
