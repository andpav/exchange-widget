import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rate from 'components/Rate';

configure({ adapter: new Adapter() });

const RateProps = {
  className: 'rateClass',
  firstSign: 'a',
  secondSign: 'b',
  rate: 0.9999,
};

const enzymeWrapper = mount(<Rate {...RateProps} />);

describe('Rate unit tests', () => {
  it('Rate render rate', () => {
    const rateText = enzymeWrapper.find('.rate');

    expect(rateText.text()).toEqual('a 1 = b 0.9999');
  });

  it('Rates fraction has small font part', () => {
    const rateText = enzymeWrapper.find('.rate_font-size_12');

    expect(rateText.text()).toEqual('99');
  });
});
