import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, getUsers } from '../service/users';
import { User } from '../types/User';
import InputComponent from '../components/InputComponent';

const CreateUser: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createUser({ firstName, lastName, email, password, dob });
    if ('id' in result) {
      const fetchedUsers = await getUsers(1, 10);
      setUsers(fetchedUsers);
      navigate('/view-users');
    } else {
      setError(result.error);
    }
  };

  const formInputs = [
    {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      value: firstName,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value),
    },
    {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      value: lastName,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value),
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      value: email,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      value: password,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
    {
      id: 'dob',
      label: 'Date of Birth',
      type: 'date',
      value: dob,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setDob(e.target.value),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
        {formInputs.map((input) => (
          <InputComponent key={input.id} {...input} />
        ))}
        {error && <p className="mb-4 text-red-600">{error}</p>}
        <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded-md">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
