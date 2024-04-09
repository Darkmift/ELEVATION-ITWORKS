import { JsonDB, Config } from 'node-json-db';
var db;

export default function getDb() {
  if (!db) {
    db = new JsonDB(new Config('myDataBase', true, false, '/'));
  }
  return db;
}

async function storeData(path, data, returnData = false) {
  getDb().push(path, data);
  if (returnData) {
    return await getData(path);
  }
}

async function getData(path) {
  return await getDb().getData(path);
}

async function deleteData(path) {
  getDb().delete(path);
}

export { storeData, getData, deleteData };