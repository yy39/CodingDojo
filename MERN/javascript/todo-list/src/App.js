import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  /*
  form should take a function that modifies the state of our app
  our app should have an array of todos that we can pass into a component from the app
  we should pass a function to modify whether or not the todo is complete
  we should pass a function to modify the state of our app which contains the array of todos
  */
  const [todos, setTodos] = useState([]);

  class Todo {
    constructor(content) {
      this.id = Date.now();
      this.content = content;
      this.isDone = false;
    }
  }

  const addTodo = (todoContent) => {
    setTodos([...todos, new Todo(todoContent)]);
  }
  const deleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo.id !== targetTodo.id));
  }
  const toggleTodo = (targetTodo) => {
    targetTodo.isDone = !targetTodo.isDone;
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <Form handleNewTodo={addTodo} />
      <TodoList todos={todos} deleteAction={deleteTodo} toggleAction={toggleTodo} />
    </div>
  );
}

export default App;
