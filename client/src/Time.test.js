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

  it('renders minutes from milliseconds', () => {
    const wrapper = shallow(<Time milliseconds={60000} />);
    expect(wrapper.text()).toEqual('1 min');
  });
});
