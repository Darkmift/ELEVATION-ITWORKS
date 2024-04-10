import getDb, {
  storeData,
  getData,
  getArray,
  saveToArray,
  removeFromArray,
  deleteData,
  updateArray,
  getOneFromArray,
} from './db';

const mockUser = { name: 'John Doe' };
const mockUser2 = { name: 'John Doe', email: "a@a.com" };
const userPath = '/user';
const usersPath = '/users';
const uniqueKey = "email";

describe('DB tests', () => {
  describe('Should be defined', () => {
    test('getDb', () => {
      expect(getDb).toBeDefined();
    });

    test('storeData', () => {
      expect(storeData).toBeDefined();
    });

    test('getData', () => {
      expect(getData).toBeDefined();
    });

    test('deleteData', () => {
      expect(deleteData).toBeDefined();
    });

    test('db should be fetched', () => {
      const db = getDb();
      expect(db).toBeDefined();
    });
  });

  describe('Should store data', () => {
    test('storeData', async () => {
      const result = await storeData(userPath, mockUser, true);
      expect(result).toEqual(mockUser);
    });
  });

  //should fetch data
  describe('Should fetch data', () => {
    test('getData', async () => {
      const result = await getData(userPath);
      expect(result).toEqual(mockUser);
    });
  });

  describe('Should delete data', () => {
    test('deleteData', async () => {
      await deleteData(userPath);
      try {
        await getData(path);
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Should store data to array', () => {
    test('saveToArray', async () => {
      await saveToArray(usersPath, mockUser2, uniqueKey);
      const data = await getData(usersPath);
      expect(data).toEqual([mockUser2]);
    });
  });
});
