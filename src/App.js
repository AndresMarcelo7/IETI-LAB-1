import React from "react";
import "./App.css";
import { TodoList } from "./TodoList";
class App extends React.Component {
  constructor(props) {
    super(props);
    // aText = actual Text - aPriority = actual Priority (In the text fields)
    const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
    {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
    {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];
    this.state = { items: todos,aText:'',aPriority:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todos={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <p/>
          <input
            name="aText"
            onChange={this.handleChange}
            value={this.state.aText}
          />
          <input
            name="aPriority"
            onChange={this.handleChange}
            value={this.state.aPriority}
          />
          
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    // Multiple events(2 inputs) in one function
    const value = e.target.value;
    this.setState({[e.target.name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.aText.length || !this.state.aPriority.length) {
      return;
    }
    const newItem = {
      text: this.state.aText,
      priority: this.state.aPriority,
      dueDate: new Date(Date.now())
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      aText:'',
      aPriority:''
    }));
  }
}

export default App;
