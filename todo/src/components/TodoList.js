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

  const clearTodo = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED', payload: e.completed })
  }

  console.log(state)
  return (
    <div>
      {state.map(todo => {
        return (
          <div className='todos' key={todo.id}>
            <p className={todo.completed ? 'completed' : ''}>
              {todo.task}
            </p>
            <input
              type="checkbox"
              onClick={() =>
                dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}
            />
          </div>
        )
      })}
      <form className='addTodo'>
        <input name='newTodo' value={newTodoText} onChange={handleChanges} />
        <button onClick={addTodo}>Add New Todo</button>
      </form>
      <div className='clearTodo'>
        <button onClick={clearTodo}>Clear Completed</button>
      </div>


    </div>
  )
}

export default TodoList;