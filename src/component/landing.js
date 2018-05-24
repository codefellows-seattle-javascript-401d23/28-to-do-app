import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        {
          localStorage.notes ?
            <p>Welcome back! Navigate to your dashboard to see
              your pending to-do list items.</p> :
            <p>Welcome to ToDo! This app helps you keep track of all your to-do items!
              Navigate to your dashboard to begin creating your to-dos.</p>
        }
      </div>
    );
  }
}
