import { put } from 'redux-saga/effects';
import * as ratesActions from 'actions/ratesActions';
import { getRates } from '../rateSaga';

/* eslint-disable redux-saga/yield-effects */
describe('rates sagas', () => {
  let getRatesGenerator;

  beforeEach(() => {
    getRatesGenerator = getRates();
  });

  it('should dispatch the rates actions if it requests the data successfully', () => {
    getRatesGenerator.next();

    expect(getRatesGenerator.next().value).toEqual(put(ratesActions.ratesLoaded()));
    getRatesGenerator.next();
    getRatesGenerator.next();
  });

  it('should call the rates action if the response errors', () => {
    getRatesGenerator.next();

    const error = new Error('Some error');
    const putDescriptor = getRatesGenerator.throw(error).value;

    expect(putDescriptor).toEqual(put(ratesActions.ratesLoadingError(error)));
  });
});
