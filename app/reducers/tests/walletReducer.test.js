import walletReducer, { initialState as walletInitialState} from '../walletReducer';
import * as walletActions from '../../actions/walletsActions';

describe('walletReducer', () => {
  let state;
  beforeEach(() => {
    state = walletInitialState;
  });

  it('should return the initial state', () => {
    const expectedResult = state;

    expect(walletReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should set loading data correctly', () => {
    const expectedResult =
      state
        .set('loading', true)
        .set('error', false);

    expect(walletReducer(state, walletActions.loadWallets())).toEqual(expectedResult);
  });

  it('should set loaded result correctly', () => {
    const data = { result: 'result' };

    const expectedResult =
      state
        .set('loading', false)
        .set('wallets', data);

    expect(walletReducer(state, walletActions.walletsLoaded(data))).toEqual(expectedResult);
  });

  it('should set loading fail result correctly', () => {
    const error = { code: 'code', message: 'message', };

    const expectedResult =
      state
        .set('loading', false)
        .set('error', error);

    expect(walletReducer(state, walletActions.walletsLoadingError(error))).toEqual(expectedResult);
  });

  it('should set fromWallet data correctly', () => {
    const wallet = { id: '1', currency: 'EUR', amount: 10 };

    const expectedResult =
      state
        .set('fromWallet', wallet);

    expect(walletReducer(state, walletActions.setFromWallet(wallet))).toEqual(expectedResult);
  });

  it('should set toWallet data correctly', () => {
    const wallet = { id: '2', currency: 'USD', amount: 9.99 };

    const expectedResult =
      state
        .set('toWallet', wallet);

    expect(walletReducer(state, walletActions.setToWallet(wallet))).toEqual(expectedResult);
  });

  it('should set amount correctly', () => {
    const amount = 12.45;

    const expectedResult =
      state
        .set('amount', amount);

    expect(walletReducer(state, walletActions.setAmount(amount))).toEqual(expectedResult);
  });
});
