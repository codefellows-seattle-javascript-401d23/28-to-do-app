import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/index';
import NoteForm from '../../noteform/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(event) {
    event.preventDefault();
    this.props.remove(this.props.note);
  }
  render() {
    const { note, update } = this.props;

    const showModal = () => update({ ...note, editing: true });
    const hideModal = () => update({ ...note, editing: false });

    const updateAndClose = (updatedNote) => {
      update({ ...updatedNote, editing: false });
      this.setState({
        note: updatedNote,
      });
    };
    return (
      <div>
        <li className='noteItem' onDoubleClick={showModal}>
        <button onClick={this.handleRemove}>X</button>
        <p>{ 
          this.state.note ? this.state.note : note.content
          }</p>
        <article>{note.createdOn.toString()}</article>
        
        <Modal className='modal' show={note.editing} hide={hideModal}>
          <h3>Editing {
            this.state.note ? this.state.note : note.content
            }</h3>
          <NoteForm className='noteForm' handleComplete={updateAndClose} note={note} hide={hideModal}/>
        </Modal>
      </li>
      </div>
    );
  }
}

NoteItem.propTypes = {
  remove: PropTypes.func,
  note: PropTypes.object,
  update: PropTypes.func,
};
