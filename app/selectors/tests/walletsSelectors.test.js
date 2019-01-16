import { fromJS } from 'immutable';
import * as walletsSelectors from '../walletsSelectors';

describe('selectWallet', () => {
  it('should select wallets state', () => {
    const data = [{ id: '1', currency: 'USD', amount: 10 }, { id: '2', currency: 'EUR', amount: 12.45 }];

    const walletState = fromJS({
      wallets: data,
    });

    const mockedState = fromJS({
      wallet: walletState,
    });

    expect(walletsSelectors.selectWalletsState(mockedState)).toEqual(walletState);
  });

  const selectWallets = walletsSelectors.selectWallets();
  it('should select wallets', () => {
    const data = fromJS([{ id: '1', currency: 'USD', amount: 10 }, { id: '2', currency: 'EUR', amount: 12.45 }]);

    const mockedState = fromJS({
      wallet: {
        wallets: data,
      },
    });

    expect(selectWallets(mockedState)).toEqual(data);
  });

  const selectFromWallet = walletsSelectors.selectFromWallet();
  it('should select fromWallet', () => {
    const data = fromJS({ id: '1', currency: 'USD', amount: 10 });

    const mockedState = fromJS({
      wallet: {
        fromWallet: data,
      },
    });

    expect(selectFromWallet(mockedState)).toEqual(data);
  });

  const selectToWallet = walletsSelectors.selectToWallet();
  it('should select toWallet', () => {
    const data = fromJS({ id: '2', currency: 'EUR', amount: 12.45 });

    const mockedState = fromJS({
      wallet: {
        toWallet: data,
      },
    });

    expect(selectToWallet(mockedState)).toEqual(data);
  });

  const selectAmount = walletsSelectors.selectAmount();
  it('should select amount', () => {
    const data = fromJS(12.24);

    const mockedState = fromJS({
      wallet: {
        amount: data,
      },
    });
    expect(selectAmount(mockedState)).toEqual(data);
  });

  const selectLoading = walletsSelectors.selectWalletsLoading();
  it('should select loading', () => {
    const data = fromJS(true);

    const mockedState = fromJS({
      wallet: {
        loading: data,
      },
    });

    expect(selectLoading(mockedState)).toEqual(data);
  });

  const selectError = walletsSelectors.selectWalletsError();
  it('should select error', () => {
    const data = fromJS({ code: 'code', message: 'message' });

    const mockedState = fromJS({
      wallet: {
        error: data,
      },
    });

    expect(selectError(mockedState)).toEqual(data);
  });
});
