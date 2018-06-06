import React from 'react';
import ReactDOM from 'react-dom';
import CenturyClub from './CenturyClub';
import Button from './Button';
import Time from './Time';
import Bottles from './Bottles';
import SecondCounter from './SecondCounter';
import Adapter from 'enzyme-adapter-react-16';

import { configure, mount } from 'enzyme';

configure({ adapter: new Adapter() });

jest.mock('./SecondCounter');

describe('CenturyClub', () => {
  let wrapper;

  beforeEach(() => {
    SecondCounter.mockClear();
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
    expect(time.props().seconds).toEqual(6000);
  });

  it('contains a Bottle component with 12 bottles', () => {
    const bottles = wrapper.find(Bottles);
    expect(bottles.props().bottles).toEqual(12);
  });

  it('has a second counter', () => {
    expect(SecondCounter).toHaveBeenCalled();
  });

  it('has a second counter that has not been started', () => {
    const mockSecondCounterInstance = SecondCounter.mock.instances[0];
    expect(mockSecondCounterInstance.start).not.toHaveBeenCalled();
  });

  it('updates remaining seconds from second counter callback', () => {
    const wrapper = mount(<CenturyClub />);
    const instance = wrapper.instance();
    expect(wrapper.state('remainingSeconds')).toEqual(6000);
    instance.handleTick(5);
    expect(wrapper.state('remainingSeconds')).toEqual(5995);
  });

  describe('clicking on the button once', () => {
    let button;

    beforeEach(() => {
      jest.useFakeTimers();
      button = wrapper.find(Button);
      button.simulate('click');
    });

    it('starts the second counter', () => {
      const mockSecondCounterInstance = SecondCounter.mock.instances[0];
      expect(mockSecondCounterInstance.start).toHaveBeenCalled();
    });

    it('sets the button\'s text to "Give up"', () => {
      expect(button.text()).toEqual('Give up');
    });

    describe('clicking button a second time', () => {
      beforeEach(() => {
        button.simulate('click');
      });

      it('the second counter is stopped', () => {
        const mockSecondCounterInstance = SecondCounter.mock.instances[0];
        expect(mockSecondCounterInstance.stop).toHaveBeenCalled();
      });

      it('changes the button text to "Start"', () => {
        expect(button.text()).toEqual('Start');
      });
    });
  });
});
