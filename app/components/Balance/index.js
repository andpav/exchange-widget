// @flow

import React, { React$Element } from 'react';
import classNames from 'classnames';

import './style.scss';

type BalanceProps = {
  className: string,
  sign: string,
  balance: number,
};

const Balance = (props: BalanceProps): React$Element<*> => {
  const balanceClass = classNames(
    'balance',
    props.className,
  );

  return (<div className={balanceClass}>You have {`${props.sign}${props.balance}`}</div>);
};

export default Balance;
