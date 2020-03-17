// environment
require('dotenv').config({
  path: require('path').join(__dirname, '../../../.env')
});

// imports
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User'
import { UserDomainRole } from './entity/UserDomainRole'
import express from 'express';
import { PostRequestHandler } from './express';
import bodyParser from 'body-parser';

// connection
import config from './typeorm.config';
createConnection(config)
  .then(async (connection) => {
    // app
    const { EXPRESS_TYPEORM_PORT: PORT = 3000 } = process.env;
    const baseUrl = `http://localhost:${PORT}`;

    const app = express();
    app.use(bodyParser.json());

    // User
    const userRepository = connection.getRepository(User);
    app.post(
      '/create-user',
      PostRequestHandler(async (body) => {
        const user = new User();
        Object.assign(user, body);
        await userRepository.save(user);
        return user;
      })
    );

    app.post(
      '/find-user-by-id',
      PostRequestHandler(async ({ id }) => userRepository.findOne(id))
    );
    app.post(
      '/delete-user-by-id',
      PostRequestHandler(async ({ id }) => userRepository.delete(id))
    );

    // UserDomainRole
    const userDomainRolesRepository = connection.getRepository(UserDomainRole);
    app.post(
      '/create-user-domain-role',
      PostRequestHandler(async (body) => {
        const userDomainRole = new UserDomainRole();
        Object.assign(userDomainRole, body);
        await userDomainRolesRepository.save(userDomainRole);
        return userDomainRole;
      })
    );

    app.listen(PORT, () => console.log('app listening on', PORT));
  })
  .catch((error) => console.log(error));
