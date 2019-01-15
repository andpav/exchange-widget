import rateReducer, { initialState as rateInitialState } from '../rateReducer';
import * as rateActions from '../../actions/ratesActions';

describe('rateReducer', () => {
  let state;
  beforeEach(() => {
    state = rateInitialState;
  });

  it('should return the initial state', () => {
    const expectedResult = state;

    expect(rateReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should set loaded result correctly', () => {
    const data = { result: 'result' };

    const expectedResult =
      state
        .set('rates', data)
        .set('loading', false)
        .set('error', false);

    expect(rateReducer(state, rateActions.ratesLoaded(data))).toEqual(expectedResult);
  });

  it('should set loading fail result correctly', () => {
    const error = { code: 'code', message: 'message' };

    const expectedResult =
      state
        .set('loading', false)
        .set('error', error);

    expect(rateReducer(state, rateActions.ratesLoadingError(error))).toEqual(expectedResult);
  });
});
