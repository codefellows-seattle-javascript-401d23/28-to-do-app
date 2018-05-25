import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './../component/dashboard';
import NoteForm from './../component/note-form';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('Simple test for initial state', () => {
    const mountedDashboard = mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});

describe('Noteform testing', () => {
  test('Simple test for initial state', () => {
    const mountedNoteform = mount(<NoteForm />);
    expect(mountedNoteform.state('title')).toEqual('');
  });
});

