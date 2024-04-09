import getDb, { storeData, getData, deleteData } from './db';

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
