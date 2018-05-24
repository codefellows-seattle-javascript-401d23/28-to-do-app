import React from 'react';
import uuid from 'uuid/v4';
import ExpenseForm from './../expense-form/index';
import autoBind from '../../utils';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: [],
      x: null,
    };

    autoBind.call(this, NoteItem);
  }

}
