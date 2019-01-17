import { call, put, takeLatest } from 'redux-saga/effects';
import { ratesLoaded, ratesLoadingError, loadRates } from 'actions/ratesActions';
import calculateRatesData from 'utils/calculateRates';

import request from 'utils/request';

export function* getRates() {
  const requestURL = 'https://api.exchangeratesapi.io/latest';

  try {
    const response = yield call(request, requestURL);

    yield put(ratesLoaded(calculateRatesData(response.rates)));
    yield new Promise((res) => setTimeout(res, 10000));
    yield put(loadRates());
  } catch (err) {
    yield put(ratesLoadingError(err));
  }
}

export default function* sagas() {
  yield takeLatest(loadRates, getRates);
}
