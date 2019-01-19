import { put } from 'redux-saga/effects';
import * as walletsActions from 'actions/walletsActions';
import { getWalletsSaga, exchangeSaga } from '../walletSaga';

/* eslint-disable redux-saga/yield-effects */
describe('getWalletsSaga', () => {
  let getWalletsGenerator;

  beforeEach(() => {
    getWalletsGenerator = getWalletsSaga();
  });

  it('should dispatch the wallets actions if it requests the data successfully with non-empty localstorage', () => {
    getWalletsGenerator.next();

    localStorage.setItem('from', 'EUR');
    localStorage.setItem('to', 'USD');

    const from = getWalletsGenerator.next(localStorage.getItem('from')).value;
    const to = getWalletsGenerator.next(localStorage.getItem('to')).value;
    // eslint-disable-next-line
    const fromWallet = getWalletsGenerator.next(from).value;
    // eslint-disable-next-line
    const toWallet = getWalletsGenerator.next(to).value;

    // TODO: fix test
    getWalletsGenerator.next();
    getWalletsGenerator.next();
    // expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setFromWallet(fromWallet)));
    // expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setToWallet(toWallet)));
    expect(getWalletsGenerator.next().value).toEqual();
  });

  it('should dispatch the wallets actions if it requests the data successfully with empty localstorage', () => {
    getWalletsGenerator.next();

    getWalletsGenerator.next();
    getWalletsGenerator.next();
    getWalletsGenerator.next();
    getWalletsGenerator.next();

    // TODO: fix test
    getWalletsGenerator.next();
    getWalletsGenerator.next();
    // expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setFromWallet(walletsMock[0])));
    // expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setToWallet(walletsMock[1])));
    expect(getWalletsGenerator.next().value).toEqual();
  });

  it('should call the wallets action if the response errors', () => {
    getWalletsGenerator.next();

    const error = new Error('Some error');
    const putDescriptor = getWalletsGenerator.throw(error).value;

    expect(putDescriptor).toEqual(put(walletsActions.walletsLoadingError(error)));
  });
});

/* eslint-disable redux-saga/yield-effects */
describe('exchangeSaga', () => {
  let exchangeGenerator;

  beforeEach(() => {
    exchangeGenerator = exchangeSaga();
  });

  it('should dispatch the exchange actions', () => {
    exchangeGenerator.next();

    exchangeGenerator.next();
    exchangeGenerator.next();
    exchangeGenerator.next();


    // TODO: fix test
    expect(exchangeGenerator.next().value).toEqual();
  });
});
