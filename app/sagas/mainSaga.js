import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_RATES } from 'actions/ratesConstants';
import { LOAD_WALLETS } from 'actions/walletsConstants';
import { ratesLoaded, ratesLoadingError, loadRates } from 'actions/ratesActions';
import { walletsLoaded, walletsLoadingError, setFromWallet, setToWallet } from 'actions/walletsActions';
import calculateRatesData from 'utils/calculateRates';

import request from 'utils/request';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* getRates() {
  const requestURL = 'https://api.exchangeratesapi.io/latest';

  try {
    // const response = yield call(request, requestURL);
    // const rates = yield calculateRatesData(response.rates);

    const rates = {
      EURUSD: 1.1392,
      USDEUR: 0.8778,
      GBPEUR: 1.1392,
      EURGBP: 0.8778,
      GBPUSD: 1.1392,
      USDGBP: 0.8778,
      EUREUR: 1,
      USDUSD: 1,
      GBPGBP: 1,
    };

    yield put(ratesLoaded(rates));
    yield delay(10000);
    // yield put(loadRates());
  } catch (err) {
    yield put(ratesLoadingError(err));
  }
}

export function* getWallets() {
  try {
    // const response = yield call(request, requestURL);
    // const wallets = response.wallets;

    const wallets = [
      { id: '0', currency: 'USD', balance: 15.15, sign: '$' },
      { id: '1', currency: 'EUR', balance: 30.30, sign: '€' },
      { id: '2', currency: 'GBP', balance: 0, sign: '£' },
    ];

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

export default function* sagas() {
  yield takeLatest(LOAD_RATES, getRates);
  yield takeLatest(LOAD_WALLETS, getWallets);
}
