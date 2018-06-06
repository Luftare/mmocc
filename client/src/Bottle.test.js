import React from 'react';
import Bottle from './Bottle';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Bottle', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<Bottle />);
    expect(wrapper.exists()).toEqual(true);
  });
});
