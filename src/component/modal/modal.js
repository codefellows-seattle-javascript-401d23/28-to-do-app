import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

export default class Modal extends React.Component {
  render() {
    const showHide = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHide}>
        <main className='modal-main'>
          { this.props.children }
          <button onClick={this.props.handleClose}> cancel </button>
        </main>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};
