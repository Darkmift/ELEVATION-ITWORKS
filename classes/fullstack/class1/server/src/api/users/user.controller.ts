import userService from './user.service'

// a express controller that handles the user routes
export const getById = async (req, res) => {
  try {
    const user = await userService.getById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    return res.send(user);
  } catch (error) {
    console.error('Error in getById: ', error);
    return res.status(500).send('Error getting user');
  }
}

export const create = async (req, res) => {
  try {
    const id = await userService.create(req.body);
    console.log("🚀 ~ create ~ user:", id)
    if (!id) {
      return res.status(400).send('Error creating user');
    }
    return res.json({ id });
  } catch (error) {
    console.error('Error in createUser: ', error);
    return res.status(500).send('Error creating user');
  }
}

export const update = async (req, res) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    if (!user) {
      return res.status(400).send('Error updating user');
    }
    return res.send(user);
  } catch (error) {
    console.error('Error in updateUser: ', error);
    return res.status(500).send('Error updating user');
  }
}

export const remove = async (req, res) => {
  try {
    const user = await userService.remove(req.params.id);
    if (!user) {
      return res.status(400).send('Error removing user');
    }
    return res.send(user);
  } catch (error) {
    console.error('Error in removeUser: ', error);
    return res.status(500).send('Error removing user');
  }
}

// get paginated users
export const getPaginated = async (req, res) => {
  try {
    const { limit, filter, page, isAsc } = req.query;
    console.log("🚀 ~ getPaginated ~ isAsc:", isAsc)
    const users = await userService.getPaginated({ limit, filter, skip: page, isAsc });
    return res.send(users);
  } catch (error) {
    console.error('Error in listUsers: ', error);
    return res.status(500).send('Error getting users');
  }
}