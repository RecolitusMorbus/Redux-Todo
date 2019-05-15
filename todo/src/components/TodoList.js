import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../actions';
// import TodoItem from './TodoItem';
// import AddTodo from './AddTodo';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  changeHandler = e => {
    this.setState({ newTodo: e.target.value })
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  toggleComplete = id => {
    this.props.toggleComplete(id);
  };

  render() {
    return (
      <div>
          {this.props.todos &&
            this.props.todos.map(todo => (
            <h4 onClick={this.toggleComplete(todo.id)} key={todo.id}>
              {todo.task}
            </h4>
          ))}
        <div>
          <input
            type="text"
            placeholder="New Task"
            value={this.state.newTodo}
            onChange={this.changeHandler}
          />
          <button onClick={this.addTodo}>Add Task</button>
        </div>
      </div>
    );
  };
};

// class TodoList extends React.Component {
//   state = {
//     newTodo: ''
//   };

//   addTodo = e => {
//     e.preventDefault();
//     this.props.addTodo(this.state.newTodo);
//     this.setState({ newTodo: '' });
//   };

//   toggleComplete = id => {
//     this.props.toggleComplete(id);
//   };

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.todos &&
//             this.props.todos.map(todo => (
//             <TodoItem
//               onClick={this.toggleComplete}
//               key={todo.id}
//               todo={todo}
//             />
//           ))}
//         </ul>
//         <AddTodo
//           addTodo={this.addTodo}
//           newTodo={this.newTodo}
//         />
//       </div>
//     );
//   };
// };

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, { addTodo, toggleComplete })(TodoList);