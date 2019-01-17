// @flow

import React, { React$Element } from 'react';
import roundAmount from 'utils/roundAmount';
import classNames from 'classnames';

import './style.scss';

type AmountProps = {
  className: string,
  amount: string | number,
  rate: number,
};

const Amount = (props: AmountProps): React$Element<*> => {
  const amountClass = classNames(
    'amount',
    props.className,
  );

  return (
    <div className={amountClass}>+ {roundAmount(props.amount * props.rate)}</div>
  );
};

export default Amount;
