import React from 'react';
import PropTypes from 'prop-types';
import roundAmount from 'utils/roundAmount';

const Rate = (props) => (<span className={props.className}>{`${props.firstSign} 1 = ${props.secondSign} ${roundAmount(props.rate)}`}</span>);

Rate.propTypes = {
  className: PropTypes.string,
  firstSign: PropTypes.string,
  secondSign: PropTypes.string,
  rate: PropTypes.number,
};

export default Rate;
