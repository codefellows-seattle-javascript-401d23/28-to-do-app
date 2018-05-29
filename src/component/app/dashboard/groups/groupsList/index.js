import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../../../../utils/index';

export default class GroupsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.all,
    };
    autoBind.call(this, GroupsList);
  }
  handleChange(event) {
    console.log(event);
  }
  // handleProject(event) {
  //   console.log(event);
  //   this.setState({
  //     name: this.state.name.map((name) => {
  //       if (name.group === event.target.value) return name;
  //       return name;
  //     }),
  //   });
  // }
  render() {
    return (
      <div className='groupsList'>
        {
          this.props.note.aside ?
          <div></div> :
          // <div className='aside'>
          //   {
          //     this.state.name.map((thing) => {        
          //       return (<li key={thing.id}>{thing.name}</li>);
          //     })
          //   } 
          // </div> : 
          <select className='group' placeholder='test'>
            <option value='newProject' onSelect={this.handleChange}>+ New Project</option>
            <option value='newProject' onSelect={this.handleChange}>+ New Project</option>           
                       
            {/* {
              this.state.name.map((thing) => {        
                return (<option key={thing.id} value={thing.project}>{thing.name}</option>);
              })
            } */}
          </select>
      }
      </div>
    );
  }
}
GroupsList.propTypes = {
  note: PropTypes.object,
  all: PropTypes.array,
};
