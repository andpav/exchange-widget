// @flow

import { walletType } from 'types';
import roundAmount from './roundAmount';

export default (ratesData: any) => {
  if (!ratesData || !Object.keys(ratesData) || !Object.keys(ratesData).length || (typeof ratesData === 'string') || Array.isArray(ratesData)) {
    return null;
  }

  const rates = {};

  Object.keys(ratesData).forEach((wallet: walletType) => {
    if (!ratesData[wallet] || typeof ratesData[wallet] !== 'number') return null;

    return Object.assign(rates, {
      [`EUR${wallet}`]: roundAmount(ratesData[wallet]),
      [`${wallet}EUR`]: roundAmount(1 / ratesData[wallet]),
      [`${wallet}${wallet}`]: 1,
    });
  });

  /*
  * Current api from exchangeratesapi.io supports only rates with EUR (in free version).
  * It will be strange if I will calculate other rates using EUR/... pairs.
  * (For example like EUR/USD=1.15, EUR/GBP=0.9 --> GBP/USD = 1.15 / 0.9)
  * I think it's problem of API and here I fix it with hardcode of some pairs.
  * */

  Object.assign(rates, {
    GBPUSD: 1.1392,
    USDGBP: 0.8778,
    EUREUR: 1,
  });

  return rates;
};
