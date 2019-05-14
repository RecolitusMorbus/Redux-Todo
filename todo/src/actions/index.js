export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = task => {
  return {
    type: ADD_TODO,
    payload: task
  };
};

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};