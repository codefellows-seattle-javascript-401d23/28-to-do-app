import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './../component/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('simple test for correct initialization', () => {
    console.log(Dashboard);
    const mountedDashboard = mount(<Dashboard />);
    expect(mountedDashboard.state('expenses')).toEqual([]);
  });
});
