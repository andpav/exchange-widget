import React from 'react';
import { toast } from 'react-toastify';
import Rate from 'components/Rate';

import './style.scss';

type PageHeaderProps = {
  className: string,
  fromWalletSign: string,
  toWalletSign: string,
  rate: number,
};

const PageHeader = (props: PageHeaderProps) => (
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
      onClick={() => toast(
        'Success exchange!', {
          progressClassName: 'page-header__progress-bar'
        })}
    >Exchange
    </button>
  </div>);

export default PageHeader;
