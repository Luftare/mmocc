import React from 'react';
import ReactDOM from 'react-dom';
import CenturyClub from './CenturyClub';
import Button from './Button';
import Time from './Time';
import Adapter from 'enzyme-adapter-react-16';

import { configure, mount } from 'enzyme';

configure({ adapter: new Adapter() });

describe('CenturyClub', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CenturyClub />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains a start button', () => {
    const button = wrapper.find(Button);
    expect(button.props().text).toEqual('Start');
  });

  it('contains a Time component with 100 minutes initial time', () => {
    const time = wrapper.find(Time);
    expect(time.props().milliseconds).toEqual(6000000);
  });

  describe('clicking on the button once', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      wrapper.find(Button).simulate('click');
    });

    it('starts the timer', () => {
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    it('sets the button\'s text to "Give up"', () => {
      expect(wrapper.find(Button).text()).toEqual('Give up');
    });

    describe('clicking button a second time', () => {
      beforeEach(() => {
        wrapper.find(Button).simulate('click');
      });

      it('stops the timer', () => {
        expect(clearInterval).toHaveBeenCalledTimes(1);
      });
    });
  });
});
