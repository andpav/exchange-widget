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

    localStorage.setItem('from', 'GBP');
    localStorage.setItem('to', 'GBP');

    const gbpWallet = walletsMock.find((wallet) => wallet.currency === 'GBP');

    const fromWalletCurrency = getWalletsGenerator.next().value;
    const toWalletCurrency = getWalletsGenerator.next().value;
    const fromWallet = getWalletsGenerator.next(fromWalletCurrency).value;
    const toWallet = getWalletsGenerator.next(toWalletCurrency).value;

    console.log(gbpWallet, ' !!!!!')
    console.log(fromWallet, ' !!!!!')
    console.log(toWallet, ' !!!!!')

    expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setFromWallet()));
    expect(getWalletsGenerator.next().value).toEqual(put(walletsActions.setToWallet()));
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
