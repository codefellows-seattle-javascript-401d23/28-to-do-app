'use strict';

import React from 'react';
import { configure as configureEnzyme, mount as enzymeShallowMount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../component/note-form/note-form';

configureEnzyme({ adapter: new Adapter() });

describe('NoteForm testing', () => {
  const mountedNoteForm = enzymeShallowMount(<NoteForm/>);
  test('Simple test for initial state', () => {
    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
    expect(mountedNoteForm.find('emptyState')).toBeTruthy();
  });
  test('Typing in the form fields should change the current state.', () => {
    mountedNoteForm.setState({
      title: 'testing noteform',
      content: 'testing content',
    });
    expect(mountedNoteForm.state('title')).toEqual('testing noteform');
    expect(mountedNoteForm.state('content')).toEqual('testing content');    
  });
});
