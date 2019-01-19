// @flow

import React, { React$Element } from 'react';
import Rate from 'components/Rate';

import './style.scss';

type PageHeaderProps = {
  className: string,
  fromWalletSign: string,
  toWalletSign: string,
  rate: number,
  exchange: () => void,
};

const PageHeader = (props: PageHeaderProps): React$Element<*> => (
  <div className="page-header">
    <div className="page-header__menu">
      <Rate
        className={props.className}
        firstSign={props.fromWalletSign}
        secondSign={props.toWalletSign}
        rate={props.rate}
      />
    </div>
    <button
      className="page-header__button"
      onClick={props.exchange}
    >Exchange
    </button>
  </div>);

export default PageHeader;
