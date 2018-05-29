import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../component/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  const mountedDashboard = shallow(<Dashboard/>);
  test('simple test for initial state', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
  test('app should contain note form and note list', () => {
    expect(mountedDashboard.find('NoteForm')).toBeTruthy();
    expect(mountedDashboard.find('NoteList')).toBeTruthy();
  });
});
