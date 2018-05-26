import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../component/app/dashboard/index';
import NoteForm from '../component/app/dashboard/noteform/index';


configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('Simple test for initial state', () => {
    const mountedDashboard = mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
describe('NoteForm testing', () => {
  test('Simple test for initial state', () => {
    const mountedNoteForm = mount(<NoteForm/>);
    expect(mountedNoteForm.state('content')).toEqual('');
  });
});
