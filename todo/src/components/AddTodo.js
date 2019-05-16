import React from 'react';

export default class AddTodo extends React.Component {
  changeHandler = e => {
    this.setState({ newTodo: e.target.value });
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="New Task"
          value={this.props.newTodo}
          onChange={this.changeHandler}
          required
        />
        <button onSubmit={this.addTodo}>Add Task</button>
      </div>
    );
  };
};