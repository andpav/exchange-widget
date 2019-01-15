import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as ratesActions from '../actions/ratesActions';

const initialState = fromJS({
  loading: true,
  error: false,
  rates: null,
});

export default handleActions({
  [ratesActions.ratesLoaded]: (state, { payload }) =>
    state
      .set('rates', payload)
      .set('loading', false)
      .set('error', false),
  [ratesActions.ratesLoadingError]: (state, { payload }) =>
    state
      .set('error', payload)
      .set('loading', false),
}, initialState);
