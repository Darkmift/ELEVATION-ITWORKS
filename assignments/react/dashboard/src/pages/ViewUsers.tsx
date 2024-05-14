import { ChangeEvent, FC, useState } from 'react';
import users from '../mocks/jsons/users.json';
import UserRow from '../components/UserRow';
import { User } from '../types/User';

const ViewUsers: FC = () => {
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState<keyof (typeof users)[0] | ''>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleSort = (field: keyof (typeof users)[0]) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const filteredUsers = (users as User[]).filter(
    (user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (!sortField) return 0;
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <h1>Users List</h1>
      <input
        type="text"
        placeholder="Filter users..."
        value={filter}
        onChange={handleFilterChange}
        className="p-2 border rounded"
      />
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="text-left w-1/3 cursor-pointer font-bold" onClick={() => handleSort('firstName')}>
            Name
          </div>
          <div className="text-left w-1/3  cursor-pointer font-bold" onClick={() => handleSort('email')}>
            Email
          </div>
          <div className="text-left w-1/6 font-bold">Actions</div>
        </div>
        <div>
          {sortedUsers.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
