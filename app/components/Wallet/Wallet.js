import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Wallet = (props) => (
  <div className="wallet">
    <div>
      {props.currency}
    </div>
    <div>
      {props.amount}
    </div>
  </div>
);

Wallet.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.number,
};

export default Wallet;
