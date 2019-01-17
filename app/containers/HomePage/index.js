import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRatesLoading, selectRatesError, selectCurrentRate } from 'selectors/ratesSelectors';
import { selectWallets, selectWalletsLoading, selectWalletsError, selectFromWallet, selectToWallet, selectAmount } from 'selectors/walletsSelectors';
import { loadRates } from 'actions/ratesActions';
import { loadWallets, setAmount, setFromWallet, setToWallet } from 'actions/walletsActions';
import HomePage from './HomePage';

export const mapDispatchToProps = (dispatch) => ({
  loadRates: () => {
    dispatch(loadRates());
  },
  loadWallets: () => {
    dispatch(loadWallets());
  },
  setAmount: (amount) => {
    dispatch(setAmount(amount));
  },
  setFromWallet: (wallet) => {
    dispatch(setFromWallet(wallet));
  },
  setToWallet: (wallet) => {
    dispatch(setToWallet(wallet));
  },
});

const mapStateToProps = createStructuredSelector({
  currentRate: selectCurrentRate(),
  wallets: selectWallets(),
  fromWallet: selectFromWallet(),
  toWallet: selectToWallet(),
  amount: selectAmount(),
  loading: selectRatesLoading() || selectWalletsLoading(),
  walletsError: selectWalletsError(),
  ratesError: selectRatesError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
