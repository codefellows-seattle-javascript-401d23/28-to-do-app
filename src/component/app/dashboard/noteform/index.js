import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../../../utils/index';
import GroupsList from '../groups/groupsList/index';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      group: null,

    };
    autoBind.call(this, NoteForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    if (this.props.add) {
      // this.setState({
      //   group: event.target.value,
      // });    
      this.props.add(this.state);
      this.setState({
        content: '',
        group: null,
      });
    } else {
      this.props.handleComplete(this.state.content);
      this.props.hide();
      this.setState({
        content: '',
      });
    } 
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleGroupChange(event) {
    event.preventDefault();
    const value = event.target.value;    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='noteForm'>
        <input 
          autoComplete="off"
          type="text"
          name="content"
          placeholder=" + Add Note"
          value={this.state.content}
          onChange={this.handleChange}
          className='newNote'
        />{
          this.state.content ? 
            <div>
              {
                !this.props.note ? 
                <div>
                  <GroupsList 
                    note={{ aside: false }} 
                    value={Selection} 
                    onChange={this.handleGroupChange}
                  />
                  <button className='createButton' type="submit">Add Note</button> 
                </div> :
                <div>
                  <GroupsList note={{ aside: false }}/>
                  <button className='updateButton' type="submit">Update</button>
                </div> 
              }
            </div> :
            <div></div>
        }
      </form>
    );
  }
}

NoteForm.propTypes = {
  add: PropTypes.func,
  note: PropTypes.object,
  handleComplete: PropTypes.func,
  hide: PropTypes.func,
};
