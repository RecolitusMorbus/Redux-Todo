import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const iniState = {
  todos: [
    {task: 'Create functional To-do List.', id: 34782356, completed: false},
    {task: 'Bless the rains down in \'Africa\' with Todo.', id: 677802, completed: false}
  ]
};

const reducer = (state = iniState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todo,
          { task: action.payload, id: Date.now(), complete: false }
        ]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              todoComplete: !todo.todoComplete
            };
          };
          return todo;
        })
      };
    default:
      return state;
  }
}

export default reducer;