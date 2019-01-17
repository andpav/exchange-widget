import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Balance from 'components/Balance';

configure({ adapter: new Adapter() });

const BalanceProps = {
  className: 'balanceClass',
  sign: 'a',
  balance: 15,
};

const enzymeWrapper = mount(<Balance {...BalanceProps} />);

describe('Balance unit tests', () => {
  it('Balance render rate', () => {
    const balanceText = enzymeWrapper.find('.balance');

    expect(balanceText.text()).toEqual('You have a15');
  });
});
