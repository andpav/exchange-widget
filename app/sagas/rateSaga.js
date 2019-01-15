import { call, put, takeLatest } from 'redux-saga/effects';
import { ratesLoaded, ratesLoadingError, loadRates } from 'actions/ratesActions';
import calculateRatesData from 'utils/calculateRates';

import request from 'utils/request';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* getRates() {
  const requestURL = 'https://api.exchangeratesapi.io/latest';

  try {
    const response = yield call(request, requestURL);
    const rates = yield calculateRatesData(response.rates);

    // const rates = {
    //   EURUSD: 1.1392,
    //   USDEUR: 0.8778,
    //   GBPEUR: 1.1392,
    //   EURGBP: 0.8778,
    //   GBPUSD: 1.1392,
    //   USDGBP: 0.8778,
    //   EUREUR: 1,
    //   USDUSD: 1,
    //   GBPGBP: 1,
    // };

    yield put(ratesLoaded(rates));
    yield delay(10000);
    yield put(loadRates());
  } catch (err) {
    yield put(ratesLoadingError(err));
  }
}

export default function* sagas() {
  yield takeLatest(loadRates, getRates);
}
