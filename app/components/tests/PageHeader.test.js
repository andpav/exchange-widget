import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageHeader from 'components/PageHeader';

configure({ adapter: new Adapter() });

const PageHeaderProps = {
  fromWalletSign: 'a',
  toWalletSign: 'b',
  rate: 0.9,
};

const enzymeWrapper = mount(<PageHeader {...PageHeaderProps} />);

describe('PageHeader unit tests', () => {
  it('PageHeader render rate', () => {
    const pageHeaderText = enzymeWrapper.find('.page-header__menu');

    expect(pageHeaderText.text()).toEqual('a 1 = b 0.9');
  });
});
