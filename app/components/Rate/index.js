import React from 'react';
import PropTypes from 'prop-types';
import roundAmount from 'utils/roundAmount';
import PrepareRate from './PrepareRate';

import './style.scss';

const Rate = (props) => (
  <div className={`rate ${props.className}`}>
    <span>{`${props.firstSign} 1 = ${props.secondSign} `}</span>
    <PrepareRate amount={(roundAmount(props.rate))} />
  </div>
);

Rate.propTypes = {
  className: PropTypes.string,
  firstSign: PropTypes.string,
  secondSign: PropTypes.string,
  rate: PropTypes.number,
};

export default Rate;
