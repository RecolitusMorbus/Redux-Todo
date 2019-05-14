import React from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

const TodoItem = props => {
  return (
    <div>
      <li
        onClick={() => props.toggleComplete(props.todo.id)}
        style={ !props.todo.completed ? null : style }
      >
        {props.todo.task}
      </li>
    </div>
  )
}

export default connect(null, { toggleComplete })(TodoItem);

const style = {
  textDecoration: 'line-through'
}