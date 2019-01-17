import React from 'react';
import roundAmount from 'utils/roundAmount';
import PrepareRate from './PrepareRate';

import './style.scss';

type RateProps = {
  className: string,
  firstSign: string,
  secondSign: string,
  rate: number,
};

const Rate = (props: RateProps) => (
  <div className={`rate ${props.className}`}>
    <span>{`${props.firstSign} 1 = ${props.secondSign} `}</span>
    <PrepareRate amount={(roundAmount(props.rate))} />
  </div>
);

export default Rate;
