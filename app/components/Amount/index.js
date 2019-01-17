// @flow
import React from 'react';
import roundAmount from 'utils/roundAmount';

import './style.scss';

type AmountProps = {
  className: string,
  amount: string | number,
  rate: number,
};

const Amount = (props: AmountProps) => (
  <div className={`amount ${props.className}`}>+ {roundAmount(props.amount * props.rate)}</div>
);

export default Amount;
