import React from 'react';
// import NoteForm from "../note-form";
// import Dashboard from "../../dashboard";
// import autoBind from "../../../utils";

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      notesFromParent: null,
    };
  }
  render() {
    return (
      <section className="notelist">
        <div>Note List: <br /> { this.props.notesFromParent }</div>
      </section>
    );
  }
}
