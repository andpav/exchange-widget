import { fromJS } from 'immutable';

import {
  LOAD_RATES_SUCCESS,
  LOAD_RATES_ERROR,
} from '../actions/ratesConstants';

const initialState = fromJS({
  loading: true,
  error: false,
  rates: null,
});

function rateReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RATES_SUCCESS:
      return state
        .set('rates', action.payload)
        .set('loading', false)
        .set('error', false);
    case LOAD_RATES_ERROR:
      return state
        .set('error', action.payload)
        .set('loading', false);
    default:
      return state;
  }
}

export default rateReducer;
