import React from 'react';
import CenturyClub from './CenturyClub';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import { configure, mount } from 'enzyme';

configure({ adapter: new Adapter() });

describe('CenturyClub snapshot', () => {
  it('renders correnctly', () => {
    const centuryClub = renderer.create(<CenturyClub />);
    expect(centuryClub).toMatchSnapshot();
  });
});
