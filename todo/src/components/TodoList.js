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
  }
}

export default connect(null, {})(TodoList);