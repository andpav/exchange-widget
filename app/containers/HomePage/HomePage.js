import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { ToastContainer, toast } from 'react-toastify';
import roundAmount from 'utils/roundAmount';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

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
            <section className="content">
              <div className="loader">loading...</div>
            </section>
          </div>
        </article>);
    }

    if (walletsError || ratesError) {
      return (
        <article>
          <div className="home-page">
            <section className="content">
              <div>error...</div>
            </section>
          </div>
        </article>
      );
    }

    const settingsSliderUp = {
      dots: true,
      className: 'slider_up',
      dotsClass: 'slider-dots slick-dots',
      afterChange: (id) => {
        setFromWallet(wallets.find((wallet) => wallet.id === String(id)));
      },
      initialSlide: fromWallet.id,
    };

    const settingsSliderDown = {
      dots: true,
      className: 'slider_down',
      dotsClass: 'slider-dots slick-dots',
      afterChange: (id) => {
        setToWallet(wallets.find((wallet) => wallet.id === String(id)));
      },
      initialSlide: toWallet.id,
    };

    return (
      <article>
        <div className="home-page">
          <section className="content">
            <div className="content__menu"><div className="content__menu-text">{`${fromWallet.sign} 1 = ${toWallet.sign} ${currentRate}`}&nbsp;</div></div>

            <button
              className="content__button"
              onClick={() => toast(
                'Success exchange!', {
                  progressClassName: 'toast-progress-bar'
                })}
            >Exchange
            </button>

            <div className="content__top">
              <div className={'slider slider_up'}>
                <Slider {...settingsSliderUp}>
                  {wallets.map((wallet) => (
                    <div key={wallet.id} className="slider-content">
                      <div className="slider-content__main-row"><span>{wallet.currency}</span> <input className="slider__input" type="number" min="0" onChange={(event) => setAmount(Math.abs(event.target.value))} value={amount} /></div>
                      <div className="slider-content__row">You have {`${wallet.sign}${wallet.balance}`}</div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="content__bottom">
              <div className={'slider slider_down'}>
                <Slider {...settingsSliderDown}>
                  {wallets.map((wallet) => (
                    <div key={wallet.id} className="slider-content">
                      <div className="slider-content__main-row">
                        <span>{wallet.currency}</span>
                        <div className="amount"><span className="amount__text">+ {roundAmount(amount * currentRate)}</span></div>
                      </div>
                      <div className="slider-content__row">
                        <span>You have {`${wallet.sign}${wallet.balance}`}</span>
                        <span>{`${toWallet.sign} 1 = ${fromWallet.sign} ${roundAmount(1 / currentRate)}`}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

          </section>
        </div>

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
