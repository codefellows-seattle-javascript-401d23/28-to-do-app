'use strict';

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme ({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('should confirm initial state of notes is an empty array', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('the dashboard should display the Note App Dashboard', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('h1').text()).toEqual('New Note Form');
  });

  test('The dashboard should contain a Note Form', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.find('NoteForm')).toBeTruthy();
  });
});
