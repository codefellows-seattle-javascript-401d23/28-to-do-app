'use strict';

import React from 'react';
import autoBind from '../../utils/index';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Landing);
  }

  render() {
    return (
      <section className="landing">
        <p>This is your to-do list, better get to it.</p>
      </section>
    );
  }
}
