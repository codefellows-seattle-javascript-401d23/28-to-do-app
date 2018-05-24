import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../note-form/note-form';

configure({ adapter: new Adapter() });

describe('NoteForm test for initial state', () => {
  test('Testing initial state of the NoteForm component', () => {
    const mountedNoteForm = mount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
  });
});
