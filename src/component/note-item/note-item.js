'use strict';

import React from 'react';
import autoBind from '../../utils/utils';

export default class Note extends React.Component {
  render() {
    return (
    <section className="noteInList">
      {this.props.note.title} --- {this.props.note.content}
      <button className="deleteBtn" onClick={() => this.props.handleRemoveNote(this.props.note)}>Delete Note</button>
    </section>
    );
  }
}
