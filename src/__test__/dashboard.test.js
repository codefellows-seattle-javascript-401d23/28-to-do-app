'use strict';

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../component/dashboard';

configure({ adapter: new Adapter() });

describe('Testing the intial state of the dashboard', () => {
  test('Initial state test', () => {
    const mountedDash = mount(<Dashboard/>);
    expect(mountedDash.state('notes')).toEqual([]);
    expect(mountedDash.state('error')).toBeNull();
  });
});
