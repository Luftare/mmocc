import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders button tag', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').exists()).toEqual(true);
  });

  it('renders text from props', () => {
    const wrapper = shallow(<Button text={'Hello!'} />);
    expect(wrapper.text()).toEqual('Hello!');
  });

  it('fires onclick callback', () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(<Button handleClick={clickHandler} />);
    wrapper.find('button').simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });
});
