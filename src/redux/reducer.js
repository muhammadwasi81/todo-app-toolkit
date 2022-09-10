import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // here we will write our reducer
    // Adding Todos
    addTodos: (state, action) => {
      console.log('add todo state', state);
      state.push(action.payload);
      return state;
    },
    // remove todos
    removeTodos: (state, action) => {
      console.log('delete todo state', state);
      return state.filter((todo) => todo.id !== action.payload);
    },
    // completed
    completedTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
    // updateTodos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        console.log(state, 'update');
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completedTodos } =
  addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;
