import React from "react";
export class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <h2>{this.props.text}</h2>
          <p>{this.props.priority}</p>
          <p>{this.props.dueDate.toString()}</p>
        </div>
    );
  }
}
