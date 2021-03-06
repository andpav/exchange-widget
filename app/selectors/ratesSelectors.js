import { createSelector } from 'reselect';
import { selectFromWallet, selectToWallet } from './walletsSelectors';

const selectRateState = (state) => state.get('rate');

const selectRates = () => createSelector(
  selectRateState,
  (globalState) => globalState.get('rates')
);

const selectRatesLoading = () => createSelector(
  selectRateState,
  (globalState) => globalState.get('loading')
);

const selectRatesError = () => createSelector(
  selectRateState,
  (globalState) => globalState.get('error')
);

const selectCurrentRate = () => createSelector(
  selectRates(),
  selectFromWallet(),
  selectToWallet(),
  (rates, fromWallet, toWallet) => {
    if (!rates || !Object.keys(rates).length || !fromWallet || !toWallet) {
      return null;
    }

    return rates[`${fromWallet.currency}${toWallet.currency}`];
  });


export {
  selectRateState,
  selectRates,
  selectRatesLoading,
  selectRatesError,
  selectCurrentRate,
};
