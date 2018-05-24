'use strict';

'use strict';

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../component/noteform';

configure({ adapter: new Adapter() });

describe('Testing the intial state of the NoteForm', () => {
  test('Initial state test', () => {
    const mountedForm = mount(<NoteForm/>);
    expect(mountedForm.state('title')).toEqual('');
    expect(mountedForm.state('content')).toEqual('');
  });
});
