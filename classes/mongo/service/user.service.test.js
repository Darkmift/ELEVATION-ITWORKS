import '../mocks/mockDb';
import { getUsers, insertUser, getUserByEmail, updateUserByEmail, deleteUserByEmail } from './user.service';

jest.setTimeout(100000);
describe('MongoDB Operations', () => {
  const mockOriginalEmail = 'TestFname@TestLname.com';
  const mockUpdatedEmail = 'blah@blah.com';
  it('should insert a doc into collection', async () => {
    const mockUser = {
      firstname: 'TestFname',
      lastname: 'TestLname',
      email: mockOriginalEmail,
      password: '*****',
      phone: '555-1234',
    };
    await insertUser(mockUser);

    const insertedUser = await getUserByEmail(mockOriginalEmail);
    expect(insertedUser.email).toEqual(mockOriginalEmail);
  });

  // test the getUsers function
  it('should return all users', async () => {
    const users = await getUsers();
    expect(users).toHaveLength(1);
  });

  // test the updateUserByEmail function
  it('should update a user by email', async () => {
    const updatedUser = {
      firstname: 'TestFname',
      lastname: 'TestLname',
      email: mockUpdatedEmail,
      password: '*****',
      phone: '555-1234',
    };
    await updateUserByEmail(mockOriginalEmail, updatedUser);
    const user = await getUserByEmail(mockUpdatedEmail);
    expect(user.email).toEqual(updatedUser.email);
  });

  // test the deleteUserByEmail function
  it('should delete a user by email', async () => {
    await deleteUserByEmail(mockUpdatedEmail);
    expect(await getUserByEmail(mockUpdatedEmail)).toBeNull();
  });
});
