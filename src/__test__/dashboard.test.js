'use strict';

import React from 'react';
import { configure as configureEnzyme, mount as enzymeShallowMount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  const mountedDashboard = enzymeShallowMount(<Dashboard/>);
  test('Simple test for initial state', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
    expect(mountedDashboard.state('error')).toBeNull();
  });
  test('Should display a NoteForm', () => {
    expect(mountedDashboard.find('NoteForm')).toBeTruthy();
  });
  test('Notes should be able to be added to the application state.', () => {
    mountedDashboard.setState({
      notes: [
        {
          title: 'testing1',
          content: 'fake content 1',
        },
        {
          title: 'testing2',
          content: 'fake content 2',
        },
      ],
    });

    expect(mountedDashboard.state('notes').length).toEqual(2);
    expect(mountedDashboard.state('notes')[0].title).toEqual('testing1');
  });
});
