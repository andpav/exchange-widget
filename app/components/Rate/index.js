// @flow

import React, { React$Element } from 'react';
import classNames from 'classnames';
import roundAmount from 'utils/roundAmount';
import PrepareRate from './PrepareRate';

import './style.scss';

type RateProps = {
  className: string,
  firstSign: string,
  secondSign: string,
  rate: number,
};

const Rate = (props: RateProps): React$Element<*> => {
  const rateClass = classNames(
    'rate',
    props.className,
  );

  return (
    <div className={rateClass}>
      <span>{`${props.firstSign} 1 = ${props.secondSign} `}</span>
      <PrepareRate amount={(roundAmount(props.rate))} />
    </div>
  );
};

export default Rate;
