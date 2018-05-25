import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../component/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('Test for initial state', () => {
    const mountedDashboard = mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
test('The dashboard should display Dashboard', () => {
  const mountedDashboard = mount(<Dashboard />);
  expect(mountedDashboard.find('h2').text()).toEqual('Dashboard');
});
test('The dashboard should contain a NoteForm', () => {
  const mountedDashboard = mount(<Dashboard />);
  expect(mountedDashboard.find('NoteForm')).toBeTruthy();
});
