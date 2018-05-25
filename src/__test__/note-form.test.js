import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from './../component/note-form/note-form';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('Simple test for initial state', () => {
    const mountedDashboard = mount(<NoteForm />);
    expect(mountedDashboard.state('title')).toEqual('');
    expect(mountedDashboard.state('content')).toEqual('');
  });
});
