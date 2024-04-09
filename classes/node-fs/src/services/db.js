import { JsonDB, Config } from 'node-json-db';
var db;

export default function getDb() {
  if (!db) {
    db = new JsonDB(new Config('myDataBase', true, false, '/'));
  }
  return db;
}

async function storeData(path, data, returnData = false) {
  db.push(path, data);
  if (returnData) {
    return await getData(path);
  }
}

async function getData(path) {
  return await db.getData(path);
}

async function deleteData(path) {
  db.delete(path);
}

export { storeData, getData, deleteData };