import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Lucas Aquino',
    email: 'lucas@lucasquino.com.br',
    password_hash: '123456677',
  });
  return res.json(user);
});

export default routes;
