import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Amount from '../Amount';

configure({ adapter: new Adapter() });

const AmountProps = {
  className: 'class-name',
  amount: 2,
  rate: 0.9,
};

const enzymeWrapper = mount(<Amount {...AmountProps} />);

describe('Amount unit tests', () => {
  it('Amount render rate', () => {
    const amountText = enzymeWrapper.find('.amount');

    expect(amountText.text()).toEqual('+ 1.8');
  });
});
