import React from 'react';
import ReactDOM from 'react-dom';
import Time from './Time';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Time', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<Time />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders minutes and seconds from milliseconds', () => {
    const wrapper = shallow(<Time milliseconds={75000} />);
    expect(wrapper.text()).toEqual('1 min 15 sec');
  });

  it('renders minutes and seconds from milliseconds that add up to less than a minute', () => {
    const wrapper = shallow(<Time milliseconds={55000} />);
    expect(wrapper.text()).toEqual('0 min 55 sec');
  });
});
