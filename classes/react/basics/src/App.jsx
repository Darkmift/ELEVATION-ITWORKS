/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function TodoList(props) {
  useEffect(() => {
    console.info('Run only once while mounting');
  }, []);

  useEffect(() => {
    console.info('Run every time the component updates');
  });

  useEffect(() => {
    return () => {
      console.info('Run only once while unmounting');
    };
  });

  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
}

const TodoForm = (props) => {
  const showRed = true;
  const style = { marginTop: '20px' };
  return (
    <form className={showRed ? 'show-red' : 'show-green'} style={style} onSubmit={props.addTodo}>
      {/* <form className="form" style={{ marginTop: '20px' }} onSubmit={props.addTodo}> */}
      <input type="text" name="title" />
      <button>Add Todo</button>
    </form>
  );
};

function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
    (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)
  );
}

function todoFactory(title) {
  return {
    title,
    id: uuidv4(),
    done: false,
  };
}

var count = 0;

function App() {
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const newTodo = todoFactory(title);

    setTodos([...todos, newTodo]);
    // setTodos((prevState) => [...prevState, newTodo]);
    // setTodos((prevState) => {
    //   // CHECK PREV
    //   console.log(count++);
    //   // return the new state
    //   return [...prevState, newTodo];
    // });
  };

  return (
    <>
      <TodoForm addTodo={submitHandler} />
      {todos.length ? <TodoList todos={todos} /> : <p>No todos</p>}
      <button onClick={() => setTodos([])}>wipe</button>
    </>
  );
}

function AppLegacy() {
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const newTodo = { name: title, done: false, id: Date.now() };
    console.log('🚀 ~ submitHandler ~ formData:', { title });
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <form style={{ display: 'flex', gap: '5px', flexDirection: 'column' }} onSubmit={submitHandler}>
        <input type="text" name="title" />
        <button>Add Todo</button>
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
