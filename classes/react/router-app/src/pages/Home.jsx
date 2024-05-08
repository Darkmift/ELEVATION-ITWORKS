import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DEFAULT_NAME = 'Guest';

function Home() {
  const [name, setName] = useState(DEFAULT_NAME);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (name === DEFAULT_NAME) return;
  //   navigate('/about', { state: { name } });
  // }, [name]);

  const submitRenameHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    setName(name);
    // navigate('/about', { state: { name } });
  };

  return (
    <div>
      <h1>Welcome, {name}</h1>
      <form onSubmit={submitRenameHandler}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Rename</button>
      </form>
      {name !== DEFAULT_NAME ? (
        <Link state={{ name }} to="/about">
          About
        </Link>
      ) : null}
    </div>
  );
}

export default Home;


/**
 * App with 
 * - Home
 * - Login {u:bob,p:12345}
 * 20 mins
 */