import React from "react";
import { Todo } from "./Todo";
export class TodoList extends React.Component {
  render() {
    const toDos = this.props.todos;
    const listItems = toDos.map((todo,i) =>
        <li key={i}>
            <Todo text={todo.text}
             priority={todo.priority}
             dueDate={todo.dueDate}/>
        </li>
        
        );
        
    return (<ul>{listItems}</ul>);
  }
}
