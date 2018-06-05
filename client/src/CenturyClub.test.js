import React from 'react';
import ReactDOM from 'react-dom';
import CenturyClub from './CenturyClub';
import Button from './Button';
import Time from './Time';
import Bottles from './Bottles';
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

  it('contains a Bottle component with 12 bottles', () => {
    const bottles = wrapper.find(Bottles);
    expect(bottles.props().bottles).toEqual(12);
  })

  describe('clicking on the button once', () => {
    let button;

    beforeEach(() => {
      jest.useFakeTimers();
      button = wrapper.find(Button); 
      button.simulate('click');
    });

    // TODO: Timer functionality is not tested

    it('starts the timer', () => {
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 100);
    });

    it('sets the button\'s text to "Give up"', () => {
      expect(button.text()).toEqual('Give up');
    });

    describe('clicking button a second time', () => {
      beforeEach(() => {
        button.simulate('click');
      });

      it('stops the timer', () => {
        expect(clearInterval).toHaveBeenCalledTimes(1);
      });

      it('changes the button text to "Start"', () => {
        expect(button.text()).toEqual('Start');
      })
    });
  });
});
