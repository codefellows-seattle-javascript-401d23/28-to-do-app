import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../component/note-form/note-form';

configure({ adapter: new Adapter() });

describe('NoteForm testing', () => {
  test('Test for initial state', () => {
    const mountedNoteForm = mount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
  });
});
