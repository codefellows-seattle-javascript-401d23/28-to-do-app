'use strict';

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from './../component/note-form/note-form';

configure ({ adapter: new Adapter() });

describe('Testing the NoteForm component', () => {
  test('should confirm the initial state of title is an empty string', () => {
    const mountedNoteForm = mount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
  });
});
