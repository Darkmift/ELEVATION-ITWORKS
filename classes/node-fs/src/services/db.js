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

async function saveToArray(pathToArr, item, idKey) {
  db = getDb();
  try {
    const index = await db.getIndex(pathToArr, item[idKey], idKey);
    if (index !== -1) return false;
  } catch (e) {}
  await db.push(`${pathToArr}[]`, item, true);
  return true;
}

async function removeFromArray(pathToArr, id, idKey) {
  db = getDb();
  const index = await db.getIndex(pathToArr, item[idKey], idKey);
  if (index === -1) return;
  await db.delete(`${pathToArr}[${index}]`);
}

async function getArray(pathToArr, limit, page) {
  if (page <= 0 || limit <= 0) {
    console.error('Invalid parameters');
    return [];
  }
  if (limit > 500) {
    console.error('Limit exceeds the allowed limit of 500');
    return [];
  }
  db = getDb();
  return db.getData(pathToArr).slice((page - 1) * limit, page * limit);
} // limit 500

async function updateArray(pathToArr, id, idKey, item) {
  if (item[idKey] !== id) return false;
  db = getDb();
  const index = db.getIndex(pathToArr, id, idKey);
  if (index === -1) return false;
  db.push(`${pathToArr}[${index}]`, item, true);
  return true;
}

async function getOneFromArray(pathToArr, id, idKey) {
  db = getDb();
  const index = db.getIndex(pathToArr, id, idKey);
  if (index === -1) return null;
  return db.getData(`${pathToArr}[${index}]`);
}

export { storeData, getData, getArray, saveToArray, removeFromArray, deleteData, updateArray, getOneFromArray };
