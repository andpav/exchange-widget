import React from 'react';
import PropTypes from 'prop-types';
import roundAmount from 'utils/roundAmount';

const Amount = (props) => (
  <div className="amount">
    <span className="amount__text">+ {roundAmount(props.amount * props.rate)}</span>
  </div>
);

Amount.propTypes = {
  amount: PropTypes.string,
  rate: PropTypes.string,
};

export default Amount;
