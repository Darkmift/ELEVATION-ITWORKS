import { deleteData, getData, storeData } from './db.js';

const PATH = '/contacts';

function getPath(email) {
  return `${PATH}/${email.toLowerCase()}`;
}

async function add(user, returnData = false) {
  const userExist = await getOne(user.email);
  if (user.name && user.email && !userExist) {
    user.createdDate = new Date();
    user.updatedDate = new Date();
    console.log('Adding a user: ', user);
    return await storeData(getPath(user.email), user, returnData);
  } else console.log(`Add: User ${user.email} already exists`);
  return null;
}

async function remove(userEmail) {
  try {
    await deleteData(getPath(userEmail));
    return true;
  } catch {
    console.log('Remove - No such user in DB: ', userEmail);
  }
  return false;
}

async function getOne(userEmail) {
  let user = null;
  try {
    user = await getData(getPath(userEmail));
    if (user) return user;
  } catch (error) {}
  console.log('getOne - No such user: ', getPath(userEmail));
  return null;
}

async function update(userEmail, userName, returnData = false) {
  let user = await getOne(userEmail);
  if (!user) {
    return null;
  }
  user.name = userName;
  user.updatedDate = new Date();
  return await storeData(getPath(userEmail), user, returnData);
}

export { add, update, remove, getOne };
