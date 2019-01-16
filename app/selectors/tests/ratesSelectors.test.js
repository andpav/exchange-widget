import { fromJS } from 'immutable';
import * as ratesSelectors from '../ratesSelectors';


describe('selectRate', () => {
  it('should select rates state', () => {
    const data = [{ USD: 1.12, EUR: 1, GBP: 1.32 }];

    const rateState = fromJS({
      rates: data,
    });

    const mockedState = fromJS({
      rate: rateState,
    });

    expect(ratesSelectors.selectRateState(mockedState)).toEqual(rateState);
  });

  const selectRates = ratesSelectors.selectRates();
  it('should select rates', () => {
    const data = fromJS({ USD: 1.12, EUR: 1, GBP: 1.32 });

    const mockedState = fromJS({
      rate: {
        rates: data,
      },
    });

    expect(selectRates(mockedState)).toEqual(data);
  });

  const selectLoading = ratesSelectors.selectRatesLoading();
  it('should select loading', () => {
    const data = fromJS(true);

    const mockedState = fromJS({
      rate: {
        loading: data,
      },
    });

    expect(selectLoading(mockedState)).toEqual(data);
  });

  const selectError = ratesSelectors.selectRatesError();
  it('should select error', () => {
    const data = fromJS({ code: 'code', message: 'message' });

    const mockedState = fromJS({
      rate: {
        error: data,
      },
    });

    expect(selectError(mockedState)).toEqual(data);
  });

  // TODO: fix test
  const selectCurrentRate = ratesSelectors.selectCurrentRate();
  it('should select current rate', () => {
    // const rates = fromJS([{ EURUSD: 1.12, USDEUR: 0.9 }]);
    // const fromWallet = fromJS({ id: '1', currency: 'USD', amount: 10 });
    // const toWallet = fromJS({ id: '2', currency: 'EUR', amount: 12.45 });
    //
    // const rateState = fromJS({
    //   rates,
    // });
    // const walletState = fromJS({
    //   fromWallet,
    //   toWallet,
    // });
    //
    // const mockedState = fromJS({
    //   wallet: walletState,
    //   rate: rateState,
    // });
    //
    // const result = fromJS(0.9);
    //
    // expect(selectCurrentRate(mockedState)).toEqual(result);
    expect().toEqual();
  });
});
