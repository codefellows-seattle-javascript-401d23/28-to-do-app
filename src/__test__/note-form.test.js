'use strict';

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from './../component/note-form/note-form';

configure({ adapter: new Adapter() });

describe('Test stuff for Note Form component', () => {
  test('title should be empty string', () => {
    const mountedNoteForm = mount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
  });
});