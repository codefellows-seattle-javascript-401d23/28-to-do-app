import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import NoteForm from '../note-form/note-form';

configureEnzyme({ adapter: new Adapter() });

describe('NoteForm test for initial state', () => {
  test('Testing initial state of the NoteForm component', () => {
    const mountedNoteForm = enzymeShallowMount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
  });
});

