import { createSelector } from 'reselect';
import { selectFromWallet, selectToWallet } from './walletsSelectors';

const selectHome = (state) => state.get('rate');

const selectRates = () => createSelector(
  selectHome,
  (globalState) => globalState.get('rates')
);

const selectRatesLoading = () => createSelector(
  selectHome,
  (globalState) => globalState.get('loading')
);

const selectRatesError = () => createSelector(
  selectHome,
  (globalState) => globalState.get('error')
);

const selectCurrentRate = (state) => createSelector(
  selectRates(state),
  selectFromWallet(),
  selectToWallet(),
  (rates, fromWallet, toWallet) => {
    if (!rates || !Object.keys(rates).length) {
      return null;
    }

    return rates[`${fromWallet.currency}${toWallet.currency}`];
  });


export {
  selectHome,
  selectRates,
  selectRatesLoading,
  selectRatesError,
  selectCurrentRate,
};
