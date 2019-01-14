import { fromJS } from 'immutable';

import {
  LOAD_WALLETS_SUCCESS,
  LOAD_WALLETS,
  LOAD_WALLETS_ERROR,
  SET_FROM_WALLET,
  SET_TO_WALLET,
  SET_AMOUNT,
} from '../actions/walletsConstants';

const initialState = fromJS({
  loading: false,
  error: false,
  wallets: [],
  fromWallet: { id: 'from', currency: 'cur', amount: 0 },
  toWallet: { id: 'to', currency: 'cur', amount: 0 },
  amount: '',
});

function walletReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WALLETS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_WALLETS_SUCCESS:
      return state
        .set('wallets', action.payload)
        .set('loading', false);
    case LOAD_WALLETS_ERROR:
      return state
        .set('error', action.payload)
        .set('loading', false);
    case SET_FROM_WALLET:
      return state
        .set('fromWallet', action.payload);
    case SET_TO_WALLET:
      return state
        .set('toWallet', action.payload);
    case SET_AMOUNT:
      return state
        .set('amount', action.payload);
    default:
      return state;
  }
}

export default walletReducer;
