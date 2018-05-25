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
  test('The dashboard should display Enter a Llama note!', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('h2').text()).toEqual('Enter a Llama note!');
  });

  test('The dashboard should contain an ExpenseForm', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('NoteForm')).toBeTruthy();
  });

  test('Notes should be added correctly to the internal state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    mountedDashboard.setState({
      note: [
        {
          title: 'walk dog',
          content: 'take the bear for a walk',
        },
        {
          title: 'whiteboard',
          content: 'do more white boarding',
        },
      ],
    });

    expect(mountedDashboard.find('NoteItem').length).toHaveLength(2);
    expect(mountedDashboard.find('h2').text()).toEqual('Enter a Llama note!');
  });
});
