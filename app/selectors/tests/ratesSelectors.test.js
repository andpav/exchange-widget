import { fromJS } from 'immutable';
import { initialState } from '../../reducers/rateReducer';
import * as ratesSelectors from '../ratesSelectors';

describe('selectRate', () => {
  it('should select rates', () => {
    const data = { USD: 1.12, EUR: 1, GBP: 1.32 };

    const rateState =
      initialState
        .set('rates', data);

    const result = fromJS({
      rates: data,
    });

    expect(ratesSelectors.selectRates(rateState)).toEqual(result);
  });

  it('should select loading', () => {
    const data = true;

    const rateState =
      initialState
        .set('loading', data);

    const result = fromJS({
      loading: data,
    });

    expect(ratesSelectors.selectRatesLoading(rateState)).toEqual(result);
  });

  it('should select error', () => {
    const data = { code: 'code', message: 'message' };
    const rateState =
      initialState
        .set('error', data);

    const result = fromJS({
      error: data,
    });

    expect(ratesSelectors.selectRatesLoading(rateState)).toEqual(result);
  });
});
