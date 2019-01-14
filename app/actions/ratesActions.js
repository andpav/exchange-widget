import {
  LOAD_RATES,
  LOAD_RATES_SUCCESS,
  LOAD_RATES_ERROR,
} from './ratesConstants';

export function loadRates() {
  return {
    type: LOAD_RATES,
  };
}

export function ratesLoaded(rates) {
  return {
    type: LOAD_RATES_SUCCESS,
    payload: rates,
  };
}

export function ratesLoadingError(error) {
  return {
    type: LOAD_RATES_ERROR,
    payload: error,
  };
}
