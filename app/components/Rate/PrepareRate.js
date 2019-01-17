import React from 'react';
import classNames from 'classnames';

import './style.scss';

type PrepareRateProps = {
  className: string,
  amount: string | number,
};

const PrepareRate = (props: PrepareRateProps) => {
  const prepareRateClass = classNames(
    props.className,
  );
  const amountArray = String(props.amount).split('.');

  if (amountArray.length === 1) {
    return (<span>{props.amount}</span>);
  }

  if (amountArray[1].length < 3) {
    return (<span>{props.amount}</span>);
  }

  return (
    <span className={prepareRateClass}>
      <span>{amountArray[0]}</span>.<span>{amountArray[1].slice(0, 2)}</span><span className="rate_font-size_12">{amountArray[1].slice(2)}</span>
    </span>
  );
};

export default PrepareRate;
