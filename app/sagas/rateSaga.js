import { call, put, takeLatest } from 'redux-saga/effects';
import { ratesLoaded, ratesLoadingError, loadRates } from 'actions/ratesActions';
// import calculateRatesData from 'utils/calculateRates';
import { ratesApiUrl } from 'constants/urls';
import request from 'utils/request';

export function* getRates() {
  try {
    const rates = yield call(request, ratesApiUrl, 'GET');

    // yield put(ratesLoaded(calculateRatesData(rates)));
    yield put(ratesLoaded(rates));
    yield new Promise((res) => setTimeout(res, 10000));
    yield put(loadRates());
  } catch (err) {
    yield put(ratesLoadingError(err));
  }
}

export default function* sagas() {
  yield takeLatest(loadRates, getRates);
}
