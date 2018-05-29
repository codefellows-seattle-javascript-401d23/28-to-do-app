import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../component/note-form/note-form';

configure({ adapter: new Adapter() });

describe('NoteForm testing', () => {
  const mountedForm = shallow(<NoteForm/>);
  test('simple test for initial state', () => {
    expect(mountedForm.state('title')).toEqual('');
    expect(mountedForm.state('content')).toEqual('');
  });
  test('should contain two input fields, a button, and a p', () => {
    expect(mountedForm.find('input').length).toBe(2);
    expect(mountedForm.find('button')).toBeTruthy();
    expect(mountedForm.find('button').text()).toBe('add');
    expect(mountedForm.find('p').text()).toBe('Add to-do items:');
  });
});
