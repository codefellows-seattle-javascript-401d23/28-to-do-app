import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.scss';

export default class Modal extends React.Component {
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

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};
