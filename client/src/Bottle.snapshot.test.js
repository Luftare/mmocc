import React from 'react';
import Bottle from './Bottle';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Bottle snapshot', () => {
  it('renders correnctly', () => {
    const bottle = renderer.create(<Bottle amountLeft={0} />);
    expect(bottle).toMatchSnapshot();
  });
});
