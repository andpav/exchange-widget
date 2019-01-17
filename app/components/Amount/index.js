import React from 'react';
import PropTypes from 'prop-types';
import roundAmount from 'utils/roundAmount';

const Amount = (props) => (
  <div className="amount">
    <span className={`amount__text ${props.className}`}>+ {roundAmount(props.amount * props.rate)}</span>
  </div>
);

Amount.propTypes = {
  className: PropTypes.string,
  amount: PropTypes.number,
  rate: PropTypes.number,
};

export default Amount;
