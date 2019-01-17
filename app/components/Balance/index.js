import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Balance = (props) => (<div className={`balance ${props.className}`}>You have {`${props.sign}${props.balance}`}</div>);

Balance.propTypes = {
  className: PropTypes.string,
  sign: PropTypes.string,
  balance: PropTypes.number,
};

export default Balance;
