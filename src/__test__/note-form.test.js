import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../component/note-form';

configure({ adapter: new Adapter() });

describe('NoteForm testing', () => {
  test('simple test for initial state', () => {
    const mountedForm = mount(<NoteForm/>);
    expect(mountedForm.state('title')).toEqual('');
    expect(mountedForm.state('content')).toEqual('');
  });
});
