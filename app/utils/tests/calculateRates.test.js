import calculateRates from '../calculateRates';

describe('calculateRates', () => {
  it('check calculate rates incorrect input cases', () => {
    const number = 10000;
    const string = 'asdasd';
    const float = 1234.0987;
    const nullValue = null;
    const arrayValue = [{ 1: 2 }, { 3: 4 }];

    const numberResult = null;
    const stringResult = null;
    const floatResult = null;
    const nullValueResult = null;
    const arrayValueResult = null;

    expect(calculateRates(number)).toEqual(numberResult);
    expect(calculateRates(string)).toEqual(stringResult);
    expect(calculateRates(float)).toEqual(floatResult);
    expect(calculateRates(nullValue)).toEqual(nullValueResult);
    expect(calculateRates(arrayValue)).toEqual(arrayValueResult);
  });

  it('check calculate rates incorrect data cases', () => {
    const ratesZeros = { USD: 0, GBP: 0 };
    const ratesWithStrings = { USD: '1111', GBP: 'asdasd' };

    // hardcode data from calculateRates stay if incorrect rates case
    const result = {
      GBPUSD: 1.1392,
      USDGBP: 0.8778,
      EUREUR: 1,
    };

    expect(calculateRates(ratesZeros)).toEqual(result);
    expect(calculateRates(ratesWithStrings)).toEqual(result);
  });

  it('check calculate rates correct input cases', () => {
    const rates = { USD: 1.1392, GBP: 0.8778 };

    const result = {
      EURUSD: 1.1392,
      USDEUR: 0.8778,
      GBPEUR: 1.1392,
      EURGBP: 0.8778,
      GBPUSD: 1.1392,
      USDGBP: 0.8778,
      EUREUR: 1,
      USDUSD: 1,
      GBPGBP: 1,
    };

    expect(calculateRates(rates)).toEqual(result);
  });
});
