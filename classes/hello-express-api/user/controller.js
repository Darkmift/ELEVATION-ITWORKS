import userService from './service.js';

export const getAllUSers = (req, res) => {
  const users = userService.getAllUSers();
  res.status(200).json(users);
};

export const getById = (req, res) => {
  const user = userService.getById(req.params.id);
  if (!user) {
    return res.status(404).end();
  }
  res.status(200).send(user);
};

export const createUser = (req, res) => {
  const newUser = userService.createUser(req.body);
  if (!newUser) {
    return res.status(400).end();
  }

  res.status(201).send(newUser);
};

export const updateUser = (req, res) => {
  const user = userService.updateUser(req.params.id, req.body);
  if (!user) {
    return res.status(400).end();
  }
  res.status(204).end();
};

export const patchUser = (req, res) => {
  const user = userService.updateUser(req.params.id, req.body);

  if (!user) {
    return res.status(400).end();
  }
  res.status(204).end();
};

export const removeUser = (req, res) => {
  userService.removeUser(req.params.id);
  res.status(204).end();
};
