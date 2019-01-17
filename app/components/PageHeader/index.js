import React from 'react';
import { toast } from 'react-toastify';
import Rate from 'components/Rate';
import PropTypes from 'prop-types';

import './style.scss';

const PageHeader = (props) => (
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

PageHeader.propTypes = {
  className: PropTypes.string,
  fromWalletSign: PropTypes.string,
  toWalletSign: PropTypes.string,
  rate: PropTypes.number,
};

export default PageHeader;
