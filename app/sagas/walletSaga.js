import { put, takeLatest } from 'redux-saga/effects';
import { walletsLoaded, walletsLoadingError, setFromWallet, setToWallet, loadWallets } from 'actions/walletsActions';
import { wallets } from 'utils/mocks';

export function* getWallets() {
  try {
    // wallets request place here
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
