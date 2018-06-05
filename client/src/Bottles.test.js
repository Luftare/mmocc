import React from 'react';
import Bottles from './Bottles';
import Bottle from './Bottle';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Bottles', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<Bottles />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains number of bottles from props', () => {
    const wrapper = mount(<Bottles bottles={5} />);
    expect(wrapper.find(Bottle).length).toEqual(5);
  });

  it('renders renders full bottles when 100 minutes is left', () => {
    const wrapper = mount(<Bottles bottles={12} remainingSeconds={6000} />);
    wrapper.find(Bottle).forEach((bottle) => {
      expect(bottle.text()).toEqual('100 %');
    });
  });

  it('renders renders empty bottles when 0 minutes is left', () => {
    const wrapper = mount(<Bottles bottles={12} remainingSeconds={0} />);
    wrapper.find(Bottle).forEach((bottle) => {
      expect(bottle.text()).toEqual('0 %');
    });
  });

  it('renders half of the bottles empty when 50 minutes is left', () => {
    const wrapper = mount(<Bottles bottles={12} remainingSeconds={3000} />);
    wrapper.find(Bottle).forEach((bottle, index) => {
      if (index < 6) {
        expect(bottle.text()).toEqual('100 %');
      } else {
        expect(bottle.text()).toEqual('0 %');
      }
    });
  });
});
