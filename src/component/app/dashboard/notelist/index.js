import React from 'react';
import NoteItem from './noteitem/index';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='noteList'>
        {
          this.props.notes.length > 0 ?
          <ul>
            { this.props.notes.map((note) => {
              return (
                <NoteItem key={note.id} note={note} remove={this.props.remove}/>
              );
            })}
          </ul> :
          <div>
            <p>NO LIST</p>
          </div>
        }
      </div>
    );
  }
}

