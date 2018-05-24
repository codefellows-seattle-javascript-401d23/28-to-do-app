import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from './../component/note-form/index';

configure({ adapter: new Adapter() });

describe('Testing the note-form Component', () => {
  test('Simple Test for initial state', () => {
    const mountedDashboard = mount(<NoteForm />);
    expect(mountedDashboard.state('title')).toEqual('');
    expect(mountedDashboard.state('content')).toEqual('');
  });
});
