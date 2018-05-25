import React from 'react';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('Simple test for initial state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard/>);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
