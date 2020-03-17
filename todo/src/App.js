import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {

  render() {
    return (
      <div>
        <h1 className='todoTitle'>Todo List</h1>
        <div>
          <TodoList />
        </div>
      </div>
    )
  }
}

export default App;
