import { useContext } from 'react';
import UiButton from '../components/UiButton';
import UiTitle from '../components/UiTitle';
import { AuthContext } from '../context';

function Home() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <UiTitle>Home</UiTitle>
      <UiButton style={{ backgroundColor: 'green' }} onClick={authCtx.logout} text="Logout" />
    </div>
  );
}

export default Home;
