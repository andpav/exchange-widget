import { put } from 'redux-saga/effects';

import * as walletsActions from 'actions/walletsActions';
import { wallets } from 'utils/mocks';
import { getWallets } from '../walletSaga';

/* eslint-disable redux-saga/yield-effects */
describe('wallets sagas', () => {
  let getWalletsGenerator;

  beforeEach(() => {
    getWalletsGenerator = getWallets();
  });

  it('should dispatch the wallets actions if it requests the data successfully', () => {
    const walletsMock = wallets;

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
