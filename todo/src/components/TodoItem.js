import React from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

const TodoItem = props => {
  return (
    <div>
      <li>
        {props.todo.task}
      </li>
    </div>
  )
}

export default connect(null, { toggleComplete })(TodoItem);