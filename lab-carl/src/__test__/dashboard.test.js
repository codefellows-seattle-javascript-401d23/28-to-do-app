'use strict';

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './../component/dashboard/dashboard';

configure ({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('should confirm initial state of notes is an empty array', () => {
    const mountedDashboard = mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
