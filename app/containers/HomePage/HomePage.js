// @flow
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Slider from 'react-slick';

import Loader from 'components/Loader';
import Error from 'components/Error';
import PageHeader from 'components/PageHeader';
import Amount from 'components/Amount';
import Rate from 'components/Rate';
import Balance from 'components/Balance';

import { walletType, errorType } from 'types';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';
import './Slider.scss';

type HomePageProps = {
  fromWallet: walletType,
  toWallet: walletType,
  wallets: Array<walletType>,
  amount: string | number,
  loading: boolean,
  currentRate: number,
  walletsError: errorType,
  ratesError: errorType,
  loadRates: () => void,
  loadWallets: () => void,
  setAmount: (amount: string | number) => void,
  setFromWallet: (wallet: walletType) => void,
  setToWallet: (wallet: walletType) => void,
};

export default class HomePage extends Component<HomePageProps, {}> {
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

    /*
    * fix of strange behavior of slider component
    * if we will start use slider from sliding (not use dots) - we will
    * scroll through a lot of wallets and get so big id.
    * we fixed it with (id % wallets.length)
    * */
    const settingsSliderUp = {
      dots: true,
      className: 'slider_up',
      dotsClass: 'slick-dots slider-dots',
      afterChange: (id) => {
        setFromWallet(wallets.find((wallet) => wallet.id === String(id % wallets.length)));
      },
      initialSlide: fromWallet.id % wallets.length,
    };

    const settingsSliderDown = {
      dots: true,
      className: 'slider_down',
      dotsClass: 'slick-dots slider-dots',
      afterChange: (id) => {
        setToWallet(wallets.find((wallet) => wallet.id === String(id % wallets.length)));
      },
      initialSlide: toWallet.id % wallets.length,
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
