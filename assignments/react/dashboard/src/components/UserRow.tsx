import { FC } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/User';

interface UserRowProps {
  user: User;
}

const UserRow: FC<UserRowProps> = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div className='w-1/3 truncate'>{`${user.firstName} ${user.lastName}`}</div>
      <div className='w-1/3 truncate'>{user.email}</div>
      <div className='w-1/6'>
        <Link to={`/edit-user/${user.id}`} className="text-blue-500">Edit</Link>
      </div>
    </div>
  );
};

export default UserRow;
