import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();
  const [name] = useState(location.state.name);

  return (
    <div>
      <h1>About</h1>
      <h3>Hello, {name}</h3>
    </div>
  );
}

export default About;
