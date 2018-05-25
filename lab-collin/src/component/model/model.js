import React from 'react';
import PropTypes from 'prop-types';
import './model.scss';


class Model extends React.Component {
  render() {
    const showHideClassName = this.props.show ? 'model display-block' : 'model display-none';
    return (
      <div className={showHideClassName}>
        <main className='model-main'>
          <button onClick={this.props.handleClose}> close </button>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Model.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default Model;
