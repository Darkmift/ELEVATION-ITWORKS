import './App.css';
import HelloForm from './components/HelloForm';
import React from 'react';
import { useState, useEffect } from 'react';

function AppForm() {
  // set username state
  const [username, setUsername] = useState('Guest');

  console.log('App rendered');

  const userNameChangeHAndler = (name) => setUsername(name || 'Guest');

  useEffect(() => {
    setUsername('Guest');
  }, [username]);

  return (
    <>
      <h1>Hello, {username}</h1>
      <HelloForm setUsername={userNameChangeHAndler} />
    </>
  );
}

function AppCoords() {
  // set username state
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const mouseLogger = (e) => {
    console.log('mousemove event listener added');
    setCoords({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseLogger);
    console.log('mounted');

    return () => {
      console.log('unmounted');
      document.removeEventListener('mousemove', mouseLogger);
    };
  }, []);

  return (
    <>
      <h2>{coords.x + ',' + coords.y}</h2>
    </>
  );
}

export default AppCoords;
