import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Loader from 'components/Loader';
import Error from 'components/Error';
import PageHeader from 'components/PageHeader';
import Amount from 'components/Amount';
import Rate from 'components/Rate';
import Balance from 'components/Balance';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';
import './Slider.scss';

export default class HomePage extends Component {
  componentDidMount() {
    this.props.loadRates();
    this.props.loadWallets();
  }

  render() {
    const {
      loading,
      wallets,
      walletsError,
      ratesError,
      fromWallet,
      toWallet,
      currentRate,
      amount,
      setAmount,
      setFromWallet,
      setToWallet
    } = this.props;

    if (loading) {
      return (
        <article>
          <div className="home-page">
            <section className="page">
              <Loader />
            </section>
          </div>
        </article>);
    }

    if (walletsError || ratesError) {
      return (<Error />);
    }

    const settingsSliderUp = {
      dots: true,
      className: 'slider_up',
      dotsClass: 'slick-dots slider-dots',
      afterChange: (id) => {
        setFromWallet(wallets.find((wallet) => wallet.id === String(id)));
      },
      initialSlide: fromWallet.id,
    };

    const settingsSliderDown = {
      dots: true,
      className: 'slider_down',
      dotsClass: 'slick-dots slider-dots',
      afterChange: (id) => {
        setToWallet(wallets.find((wallet) => wallet.id === String(id)));
      },
      initialSlide: toWallet.id,
    };

    return (
      <article>
        <section className="page">
          <PageHeader
            fromWalletSign={fromWallet.sign}
            toWalletSign={toWallet.sign}
            rate={currentRate}
          />

          <div className="page__top">
            <Slider {...settingsSliderUp}>
              {wallets.map((wallet) => (
                <div key={wallet.id} className="slider-content">
                  <div className="slider-content__main-row">
                    <span>{wallet.currency}</span>
                    <input
                      className="slider__input"
                      type="number"
                      min="0"
                      onChange={(event) => setAmount(Math.abs(event.target.value))}
                      value={amount}
                    />
                  </div>
                  <Balance
                    className="slider-content__row"
                    sign={wallet.sign}
                    balance={wallet.balance}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="page__bottom">
            <Slider {...settingsSliderDown}>
              {wallets.map((wallet) => (
                <div key={wallet.id} className="slider-content">
                  <div className="slider-content__main-row">
                    <span>{wallet.currency}</span>
                    <Amount
                      amount={amount}
                      rate={currentRate}
                    />
                  </div>

                  <div className="slider-content__row">
                    <Balance
                      sign={wallet.sign}
                      balance={wallet.balance}
                    />

                    <Rate
                      firstSign={toWallet.sign}
                      secondSign={fromWallet.sign}
                      rate={1 / currentRate}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <ToastContainer />
      </article>
    );
  }
}

HomePage.propTypes = {
  fromWallet: PropTypes.object,
  toWallet: PropTypes.object,
  wallets: PropTypes.array,
  amount: PropTypes.string,
  loading: PropTypes.bool,
  currentRate: PropTypes.number,
  walletsError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  ratesError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loadRates: PropTypes.func,
  loadWallets: PropTypes.func,
  setAmount: PropTypes.func,
  setFromWallet: PropTypes.func,
  setToWallet: PropTypes.func,
};
