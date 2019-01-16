import roundAmount from '../roundAmount';

describe('roundAmount', () => {
  it('check round amount', () => {
    const number = 10000;
    const string = '10000';
    const float = 1234.0987;
    const longFloat = 1234.098227;
    const exponential = 1e-3;
    const exponentialSmall = 1e-6;
    const zero = 0;
    const trash = 'teststring';
    const nullValue = null;

    const numberResult = 10000;
    const stringResult = null;
    const floatResult = 1234.0987;
    const longFloatResult = 1234.0982;
    const exponentialResult = 0.001;
    const exponentialSmallResult = 0;
    const zeroResult = 0;
    const trashResult = null;
    const nullValueResult = null;

    expect(roundAmount(number)).toEqual(numberResult);
    expect(roundAmount(string)).toEqual(stringResult);
    expect(roundAmount(float)).toEqual(floatResult);
    expect(roundAmount(longFloat)).toEqual(longFloatResult);
    expect(roundAmount(exponential)).toEqual(exponentialResult);
    expect(roundAmount(exponentialSmall)).toEqual(exponentialSmallResult);
    expect(roundAmount(zero)).toEqual(zeroResult);
    expect(roundAmount(trash)).toEqual(trashResult);
    expect(roundAmount(nullValue)).toEqual(nullValueResult);
  });
});
