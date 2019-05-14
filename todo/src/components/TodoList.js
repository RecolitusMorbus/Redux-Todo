import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../actions';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  changeHandler = e => {
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ newTodo: e.target.value });
  };

  todoAdder = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  completeToggler = id => {
    this.props.toggleComplete(id);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.map(todo => (
            <TodoItem todo={todo} />
          ))}
        </ul>
        <div>
          <input
            type="text"
            name="newTodo"
            placeholder="New Task"
            value={this.state.newTodo}
            onChange={this.changeHandler}
            required
          />
          <button onSubmit={this.todoAdder}>Add Task</button>
        </div>
      </div>
    );
  };
};

const mapPropsToState = state => ({
  todoList: state.todo
})

export default connect(mapPropsToState, { addTodo, toggleComplete })(TodoList);