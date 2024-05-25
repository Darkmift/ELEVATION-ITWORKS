import { useState } from 'react';
import './App.css';

function TodoList() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  );
}

const TodoForm = () => {
  return (
    <form>
      <input type="text" name="title" />
      <button>Add task</button>
    </form>
  );
};

function App() {
  const [todos, setTodos] = useState([]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const title = formData.get('title');
  //   const newTodo = { name: title, done: false, id: Date.now() };
  //   setTodos([...todos, newTodo]);
  // };

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

function AppLegasy() {
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const newTodo = { name: title, done: false, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" />
        <button>Add task</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
