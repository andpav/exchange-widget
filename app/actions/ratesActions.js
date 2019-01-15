import { createAction } from 'redux-actions';

export const loadRates = createAction('LOAD_RATES');
export const ratesLoaded = createAction('LOAD_RATES_SUCCESS');
export const ratesLoadingError = createAction('LOAD_RATES_ERROR');
