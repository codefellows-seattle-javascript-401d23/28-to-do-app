import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import Dashboard from '../dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('Simple test for initial state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('The dashboard should contain a NoteForm', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('NoteForm')).toBeTruthy();
  });

  test('The dashboard should contain a NoteList', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('NoteList')).toBeTruthy();
  });

  test('Notes should be added correctly to the internal state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    mountedDashboard.setState({
      notes: [
        {
          title: 'walk dog',
          content: 'take the bear for a walk',
        },
      ],
    });
    expect(mountedDashboard.find('NoteList').length).toEqual(1);
  });
});
