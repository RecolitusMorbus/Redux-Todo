import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const iniState = {
  todos: [
    {task: 'Create functional To-do List.', id: 34782356, completed: false},
    {task: 'Bless the rains down in \'Africa\' with Todo.', id: 677802, completed: false}
  ]
};

const reducer = (state = iniState, action) => {
  switch(action.payload) {
    case ADD_TODO:
      const newTodo = {
        task: action.payload,
        id: Date.now(),
        complete: false,
      }
      return {
        ...state,
        todos: [...state.todo, newTodo]
      };
    case TOGGLE_COMPLETE:
      const toggleComplete = {
        ...state,
        todo: state.todo.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...state,
              completed: !todo.completed
            };
          };
          return todo;
        })
      };
      return {
        ...state,
        todo: toggleComplete
      };
    default:
      return state;
  }
}

export default reducer;