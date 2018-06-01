import React from 'react';
import ReactDOM from 'react-dom';
import CenturyClub from './CenturyClub';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('CenturyClub', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CenturyClub />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CenturyClub />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains a h1', () => {
    const titleElement = wrapper.find('h1');
    expect(titleElement.exists()).toEqual(true);
  });
});
