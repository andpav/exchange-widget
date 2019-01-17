import React from 'react';
import PropTypes from 'prop-types';
import roundAmount from 'utils/roundAmount';

import './style.scss';

const Amount = (props) => (
  <div className={`amount ${props.className}`}>+ {roundAmount(props.amount * props.rate)}</div>
);

Amount.propTypes = {
  className: PropTypes.string,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  rate: PropTypes.number,
};

export default Amount;
