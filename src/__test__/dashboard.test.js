import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../component/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard test for initial state', () => {
  test('Testing initial state of the dashboard component', () => {
    const mountedDashboard = mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
    expect(mountedDashboard.state('error')).toEqual(null);
  });
});
