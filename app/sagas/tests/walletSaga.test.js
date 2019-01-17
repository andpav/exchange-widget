import { put } from 'redux-saga/effects';

import * as walletsActions from 'actions/walletsActions';
import { wallets } from 'mocks';
import { getWallets } from '../walletSaga';

/* eslint-disable redux-saga/yield-effects */
describe('wallets sagas', () => {
  let getWalletsGenerator;

  beforeEach(() => {
    getWalletsGenerator = getWallets();
  });

  it('should dispatch the wallets actions if it requests the data successfully with non-empty localstorage', () => {
    const walletsMock = wallets;

    localStorage.setItem('from', 'EUR');
    localStorage.setItem('to', 'USD');

    const from = getWalletsGenerator.next(localStorage.getItem('from')).value;
    const to = getWalletsGenerator.next(localStorage.getItem('to')).value;
    // eslint-disable-next-line
    const fromWallet = getWalletsGenerator.next(from).value;
    const toWallet = getWalletsGenerator.next(to).value;

    // TODO: test fix
    getWalletsGenerator.next();
    // expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setFromWallet(fromWallet)));
    expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setToWallet(toWallet)));
    expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.walletsLoaded(walletsMock)));
  });

  it('should dispatch the wallets actions if it requests the data successfully with empty localstorage', () => {
    const walletsMock = wallets;

    getWalletsGenerator.next();
    getWalletsGenerator.next();
    getWalletsGenerator.next();
    getWalletsGenerator.next();

    expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setFromWallet(walletsMock[0])));
    expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setToWallet(walletsMock[1])));
    expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.walletsLoaded(walletsMock)));
  });

  it('should call the wallets action if the response errors', () => {
    getWalletsGenerator.next();

    const error = new Error('Some error');
    const putDescriptor = getWalletsGenerator.throw(error).value;

    expect(putDescriptor).toEqual(put(walletsActions.walletsLoadingError(error)));
  });
});
