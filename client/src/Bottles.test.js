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

  it('bottles are full when no time has passed', () => {
    const wrapper = mount(<Bottles bottles={2} remainingSeconds={6000} />);
    const bottles = wrapper.find(Bottle);
    expect(bottles.at(0).props().amountLeft).toEqual(1);
    expect(bottles.at(1).props().amountLeft).toEqual(1);
  });

  it('no beer left when time is over', () => {
    const wrapper = mount(<Bottles bottles={2} remainingSeconds={0} />);
    const bottles = wrapper.find(Bottle);
    expect(bottles.at(0).props().amountLeft).toEqual(0);
    expect(bottles.at(1).props().amountLeft).toEqual(0);
  });

  it('half of the amount is consumed when 50 minutes is left', () => {
    const wrapper = mount(<Bottles bottles={3} remainingSeconds={3000} />);
    const bottles = wrapper.find(Bottle);
    expect(bottles.at(0).props().amountLeft).toEqual(1);
    expect(bottles.at(1).props().amountLeft).toEqual(0.5);
    expect(bottles.at(2).props().amountLeft).toEqual(0);
  });
});
