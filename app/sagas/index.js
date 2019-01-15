import { fork, all } from 'redux-saga/effects';

import walletSaga from './walletSaga';
import ratesSaga from './rateSaga';

export default function* () {
  yield all([
    fork(walletSaga),
    fork(ratesSaga),
  ]);
}
