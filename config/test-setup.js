import 'babel-polyfill';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(window, 'matchMedia', {
  // eslint-disable-next-line
  value: () => {
    return {
      matches: false,
    };
  },
});

Object.defineProperty(window, 'requestAnimationFrame', {
  value: (callback) => {
    setTimeout(callback, 0);
  },
});
