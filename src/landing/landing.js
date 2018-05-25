'use strict';

import React from 'react';
import autoBind from '../utils/index';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, Landing);
  }
  render() {
    return (
      <section className="landing">
        <h1>Welcome to Llama Done!</h1>
        <p>Llama Minder is a Todo App where Llamas help you remember things !</p>
      </section>
    );
  }
}
