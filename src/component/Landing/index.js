import React from 'react';
import autoBind from './../../utils';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      error: null,
    };

    autoBind.call(this, Landing);
  }

  render() {
    return (
        <h1>The ToDo app is a great way to keep track of all the things you have to do!  Simply input a thing you want TODO and press enter to add it to your list!</h1> 
    );
  }
}
