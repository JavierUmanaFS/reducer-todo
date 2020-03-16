import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import '../App.css';


const TodoList = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodoText, setNewTodoText] = useState('');

  const handleChanges = e => {
    setNewTodoText(e.target.value)
  };

  const addTodo = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodoText });
  }

  console.log(state)
  return (
    <div>
      {state.map(todo => {
        return (
          <div key={todo.id}>
            <p className={todo.completed ? 'completed' : ''}>{todo.task}</p>
            <input
              type="checkbox"
              onClick={() =>
                dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}
            /></div>

        )
      })}
      <form>
        <input name='newTodo' value={newTodoText} onChange={handleChanges} />
        <button onClick={addTodo}>Add New Todo</button>
      </form>
    </div>
  )
}

export default TodoList;