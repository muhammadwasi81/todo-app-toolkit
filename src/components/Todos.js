import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodos(todo)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  const addTodoHandler = () => {
    if (!todo) {
      alert(`Please enter a todo`);
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo('');
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
      <button className="add-btn" onClick={() => addTodoHandler()}>
        Add
      </button>
      <br />
    </div>
  );
};

// we used connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
