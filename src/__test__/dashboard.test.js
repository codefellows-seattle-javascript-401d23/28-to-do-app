import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../component/dashboard';

configure({ adapter: new Adapter() });

jest.mock('mock-local-storage');

describe('Dashboard testing', () => {
  test('simple test for initial state', () => {
    const mountedDashboard = mount(<Dashboard/>);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
