/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Foo from '../components/Foo';
import { AuthContext } from '../context';

export default function Home() {
  const { logout, user } = useContext(AuthContext);

  return (
    <div>
      <button onClick={logout}>logout</button>
      <h1>Welcome, {user.name}</h1>

      <Foo color={'red'}>
        <h1>Foo</h1>
        <Foo color={'green'}>
          <h1>Foo</h1>
          <p>Bar</p>
          <Foo>
            <h1>Foo</h1>
            <p>Bar</p>
          </Foo>
        </Foo>
        <p>Bar</p>
      </Foo>
    </div>
  );
}
