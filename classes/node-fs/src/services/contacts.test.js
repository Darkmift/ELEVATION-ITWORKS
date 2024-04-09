import { add, getOne, remove, update } from './contacts.js';

const user1 = { name: 'Jhon One', email: 'johnOne@doe.com' };
const user2 = { name: 'Jhon Two', email: 'johnTwo@doe.com' };

describe('Contacts Service tests', () => {
  describe('Should be defined', () => {
    test('getOne', () => {
      expect(getOne).toBeDefined();
    });
    test('add', () => {
      expect(add).toBeDefined();
    });
    test('remove', () => {
      expect(remove).toBeDefined();
    });
    test('update', () => {
      expect(update).toBeDefined();
    });
  });

  describe('Should add a contact', () => {
    test('add', async () => {
      const result = await add(user1, true);
      expect(result.name).toEqual(user1.name);
      expect(result.email).toEqual(user1.email);
      expect(result.createdDate).toBeDefined();
      expect(result.updatedDate).toBeDefined();
    });
  });

  describe('Should get contact', () => {
    test('getOne', async () => {
      const result = await getOne(user1.email);
      expect(result).toEqual(user1);
    });
  });

  describe('Should remove a contact', () => {
    test('remove', async () => {
      await remove(user1.email);
      const result = await getOne(user1.email);
      expect(result).toEqual(null);
    });
  });

  describe('Should update a contact', () => {
    test('update', async () => {
      await add(user2);
      const result = await update(user2.email, user2.name, true);
      expect(result.name).toEqual(user2.name);
      expect(result.email).toEqual(user2.email);
      expect(result.createdDate).toBeDefined();
      expect(result.updatedDate).toBeDefined();
    });
  });
});
