import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class Modal extends React.Component {
  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <main className='modal-main'>
          <button onClick={this.props.handleClose}> cancel </button>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Modal.PropTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  handleClose: PropTypes.func,
};

export default Modal;
