// @flow
import React from 'react';

import './style.scss';

type BalanceProps = {
  className: string,
  sign: string,
  balance: number,
};

const Balance = (props: BalanceProps) => (<div className={`balance ${props.className}`}>You have {`${props.sign}${props.balance}`}</div>);

export default Balance;
