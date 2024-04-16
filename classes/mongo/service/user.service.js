import dbConnection from '../db/connection.js';
export const DB_ELEVATION = 'elevation';
export const COLLECTION = { USERS: 'users' };
// a function that inserts a user into the database
export async function insertUser(user) {
  try {
    const client = await dbConnection.connect();
    const db = client.db(DB_ELEVATION);
    const users = db.collection(COLLECTION.USERS);
    const result = await users.insertOne(user);
    console.log({ insert: result });
    console.log(`User inserted with the following id: ${result.insertedId}`);
  } catch (error) {
    console.error('Failed to insert user:', error);
    return null;
  }
}

// a function that retrieves all users from the database
export async function getUsers() {
  try {
    const client = await dbConnection.connect();
    const db = client.db(DB_ELEVATION);
    const users = db.collection(COLLECTION.USERS);
    const result = await users.find({}).toArray();
    return result;
  } catch (error) {
    console.error('Failed to retrieve users:', error);
    return null;
  }
}

// a function that retrieves a user by email
export async function getUserByEmail(email) {
  try {
    const client = await dbConnection.connect();
    const db = client.db(DB_ELEVATION);
    const users = db.collection(COLLECTION.USERS);
    const result = await users.findOne({ email });
    return result;
  } catch (error) {
    console.error('Failed to retrieve user:', error);
    return null;
  }
}

// a function that updates a user by email
export async function updateUserByEmail(email, user) {
  try {
    const client = await dbConnection.connect();
    const db = client.db(DB_ELEVATION);
    const users = db.collection(COLLECTION.USERS);
    const result = await users.findOneAndUpdate({ email }, { $set: user });
    console.log({ update: result });
    // console.log(`User updated with the following id: ${result.upsertedId}`);
  } catch (error) {
    console.error('Failed to update user:', error);
    return null;
  }
}

// a function that deletes a user by email
export async function deleteUserByEmail(email) {
  try {
    const client = await dbConnection.connect();
    const db = client.db(DB_ELEVATION);
    const users = db.collection(COLLECTION.USERS);
    const result = await users.deleteOne({ email });
    console.log({ remove: result });
    console.log(`User deleted with the following id: ${result.deletedId}`);
  } catch (error) {
    console.error('Failed to delete user:', error);
    return null;
  }
}
