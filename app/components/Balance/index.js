import React from 'react';
import PropTypes from 'prop-types';

const Balance = (props) => (<div className={props.className}>You have {`${props.sign}${props.balance}`}</div>);

Balance.propTypes = {
  className: PropTypes.string,
  sign: PropTypes.string,
  balance: PropTypes.number,
};

export default Balance;
