import { fromJS } from 'immutable';
import { initialState } from '../../reducers/walletReducer';
import * as walletsSelectors from '../walletsSelectors';

describe('selectWallet', () => {
  it('should select wallets', () => {
    const data = [{ id: '1' , currency: 'USD', amount: 10 }, { id: '2' , currency: 'EUR', amount: 12.45 }];
    const walletState =
      initialState
        .set('wallets', data);

    const result = fromJS({
      wallets: data,
    });

    expect(walletsSelectors.selectWallets(walletState)).toEqual(result);
  });

  it('should select fromWallet', () => {
    const data = { id: '1' , currency: 'USD', amount: 10 };
    const walletState =
      initialState
        .set('fromWallet', data);

    const result = fromJS({
      fromWallet: data,
    });

    expect(walletsSelectors.selectFromWallet(walletState)).toEqual(result);
  });

  it('should select toWallet', () => {
    const data = { id: '2' , currency: 'EUR', amount: 12.45 };
    const walletState =
      initialState
        .set('toWallet', data);

    const result = fromJS({
      toWallet: data,
    });

    expect(walletsSelectors.selectToWallet(walletState)).toEqual(result);
  });

  it('should select amount', () => {
    const data = 12.24;
    const walletState =
      initialState
        .set('amount', data);

    const result = fromJS({
      amount: data,
    });

    expect(walletsSelectors.selectAmount(walletState)).toEqual(result);
  });

  it('should select loading', () => {
    const data = true;
    const walletState =
      initialState
        .set('loading', data);

    const result = fromJS({
      loading: data,
    });

    expect(walletsSelectors.selectWalletsLoading(walletState)).toEqual(result);
  });

  it('should select error', () => {
    const data = { code: 'code', message: 'message' };
    const walletState =
      initialState
        .set('error', data);

    const result = fromJS({
      error: data,
    });

    expect(walletsSelectors.selectWalletsError(walletState)).toEqual(result);
  });
});
