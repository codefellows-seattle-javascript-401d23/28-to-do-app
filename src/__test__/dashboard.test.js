
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import Dashboard from '../component/dashboard/dashboard';


configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('Simple test for initial state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
    expect(mountedDashboard.state('error')).toEqual(null);
  });
  test('The dashboard should display Notes Creator', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('h2').text()).toEqual('Notes creator');
  });

  test('The dashboard should contain an NotesForm', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('NoteForm')).toBeTruthy();
  });

  test('Expenses should be added correctly to the internal state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    mountedDashboard.setState({
      notes: [
        {
          title: 'note1',
          content: 'this is a note',
        },
        {
          title: 'note2',
          content: 'this is another note',
        },
      ],
    });
  });
});
