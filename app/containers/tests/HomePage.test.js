import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import nock from 'nock';
import configureStore from 'configureStore';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../HomePage';

const initialState = fromJS({
  rate: {
    rates: {
      EURUSD: 1.1392,
      USDEUR: 0.8778,
      GBPEUR: 1.1392,
      EURGBP: 0.8778,
      GBPUSD: 1.1392,
      USDGBP: 0.8778,
      EUREUR: 1,
      USDUSD: 1,
      GBPGBP: 1,
    },
    loading: false,
    error: false,
  },
  wallet: {
    wallets: [
      { id: '0', currency: 'USD', balance: 15.15, sign: '$' },
      { id: '1', currency: 'EUR', balance: 30.30, sign: '€' },
      { id: '2', currency: 'GBP', balance: 0, sign: '£' },
    ],
    fromWallet: { id: '0', currency: 'USD', balance: 15.15, sign: '$' },
    toWallet: { id: '1', currency: 'EUR', balance: 30.30, sign: '€' },
    loading: false,
    error: false,
  },
});

const history = createHistory();
const store = configureStore(initialState, history);


// TODO: fix test
describe('<HomePage />', () => {
  it('should render HomePage', () => {
    nock('https://api.exchangeratesapi.io')
      .get('/latest')
      .reply(200, { rates: {
        GBP: 1.1392,
        USD: 0.8778,
      }});

    const enzymeWrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // eslint-disable-next-line
    const menu = enzymeWrapper.find('.page-header__menu');

    // expect(menu.text()).toEqual('$ 1 = € 0.8778');
  });
});
