import { fromJS } from 'immutable';

import { handleActions } from 'redux-actions';
import * as walletActions from '../actions/walletsActions';

const initialState = fromJS({
  loading: false,
  error: false,
  wallets: [],
  fromWallet: { id: 'from', currency: 'cur', amount: 0 },
  toWallet: { id: 'to', currency: 'cur', amount: 0 },
  amount: '',
});

export default handleActions({
  [walletActions.loadWallets]: (state) =>
    state
      .set('loading', true)
      .set('error', false),
  [walletActions.walletsLoaded]: (state, { payload }) =>
    state
      .set('wallets', payload)
      .set('loading', false),
  [walletActions.walletsLoadingError]: (state, { payload }) =>
    state
      .set('error', payload)
      .set('loading', false),
  [walletActions.setFromWallet]: (state, { payload }) =>
    state
      .set('fromWallet', payload),
  [walletActions.setToWallet]: (state, { payload }) =>
    state
      .set('toWallet', payload),
  [walletActions.setAmount]: (state, { payload }) =>
    state
      .set('amount', payload),
}, initialState);
