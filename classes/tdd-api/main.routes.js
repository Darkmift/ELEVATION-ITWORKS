import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
  res.json({ message: 'Hello from api/v1/' });
});

export default mainRouter;
