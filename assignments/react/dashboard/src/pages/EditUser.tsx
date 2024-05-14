import { useState, useEffect, FC, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import users from '../mocks/jsons/users.json';
// import parseDate from '../utils/parseDate';

const EditUser: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState(() => users.find((user) => user.id === id));
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setError('User not found');
    }
  }, [user]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      const updatedUser = {
        ...user,
        firstName,
        lastName,
        email,
      };
      const userIndex = users.findIndex((u) => u.id === id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser as typeof users[0];
        navigate('/view-users');
      } else {
        setError('User not found');
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className='font-bold text-center mb-4'>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <label htmlFor="firstName"  className='w-1/4'>First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='w-1/2 border'
          />
        </div>
        <div className='flex'>
          <label htmlFor="lastName" className='w-1/4'>Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='w-1/2 border'
          />
        </div>
        <div className='flex'>
          <label htmlFor="email"    className='w-1/4'>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-1/2 border'
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className='font-bold flex m-auto'>Update</button>
      </form>
    </div>
  );
};

export default EditUser;
