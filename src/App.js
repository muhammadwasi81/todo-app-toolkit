import React from 'react';
import DisplayTodo from './components/DisplayTodo';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <h1>React Redux</h1>
      <Todos />
      <DisplayTodo />
    </div>
  );
};

export default App;
