import { IUser, User } from './user.model';
import AppDataSource from "@/db/data-source";

// // Define an interface that extends BaseEntity and has a constructor
// interface ConstructableEntity<T> {
//   new(): T;
// }

// // Modify the buildEntity function to use the ConstructableEntity interface
// const buildEntity = async <T, K extends BaseEntity>(model: ConstructableEntity<K>, payload: T): Promise<K | null> => {
//   try {
//     const entity = new model();
//     for (const key in payload) {
//       if (Object.prototype.hasOwnProperty.call(payload, key)) {
//         (entity as any)[key] = payload[key];
//       }
//     }
//     return entity;
//   } catch (error) {
//     console.error('Error in buildEntity: ', error);
//     return null;
//   }
// };

const userDataSource = AppDataSource.getRepository(User);

const create = async (user: IUser) => {
  try {
    const newUser = new User();

    for (const key in user) {
      newUser[key] = user[key];
    }

    const resultUser = await userDataSource.manager.save(newUser);

    if (!resultUser.id) {
      throw new Error('Error creating user');
    }
    return resultUser.id;
  } catch (error) {
    console.error('Error in createUser: ', error);
    return null;
  }
}

const getById = async (id) => {
  try {
    const user = await userDataSource.findOne(id);
    return user;
  } catch (error) {
    console.error('Error in getUserById: ', error);
    return null;
  }
}

const update = async (id, user: IUser) => {
  try {

    //throw error if user has password or id
    if (['password', 'id'].some(key => !!user[key])) {
      throw new Error('Forbidden action');
    }

    const userToUpdate = await userDataSource.findOneBy({ id });
    if (!userToUpdate?.id) {
      throw new Error('User not found');
    }
    for (const key in user) {
      userToUpdate[key] = user[key];
    }
    await userToUpdate.save();
    return userToUpdate;
  } catch (error) {
    console.error('Error in updateUser: ', error);
    return null;
  }
}

const remove = async (id) => {
  try {
    const userToDelete = await userDataSource.findOne(id);
    if (!userToDelete?.id) {
      throw new Error('User not found');
    }
    await userToDelete.remove();
    return userToDelete;
  } catch (error) {
    console.error('Error in deleteUser: ', error);
    return null;
  }
}

const getPaginated = async ({ limit = 10, skip = 0, filter = 'firstName', isAsc = true }) => {
  try {
    const order = isAsc ? 'ASC' : 'DESC'
    console.log("🚀 ~ getPaginated ~ order:", order)
    const users = await userDataSource.find({
      order: {
        [filter]: order
      },
      take: limit,
      skip,
    });
    return users;
  } catch (error) {
    console.error('Error in getPaginated: ', error);
    return null;
  }
}

export default {
  create,
  getById,
  update,
  remove,
  getPaginated
}