import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './noteitem/index';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectGroup: null,
    };
  }
  render() {
    return (
      <div>
        {
          this.state.projectGroup ? <div></div> :
            <div className='noteList'>
              <title>Today</title>
              <date>
              {
                new Date().toDateString()
              }
              </date>
              {
                this.props.notes.length > 0 ?
                <ul>
                  { this.props.notes.map((note) => {
                    return (
                      <NoteItem 
                      key={note.id} 
                      note={note} 
                      remove={this.props.remove} 
                      update={this.props.update}
                      />
                    );
                  })}
                </ul> :
                <div></div>
              }
            </div>
        }
      </div>
    );
  }
}

NoteList.propTypes = {
  remove: PropTypes.func,
  notes: PropTypes.array,
  update: PropTypes.func,
};
