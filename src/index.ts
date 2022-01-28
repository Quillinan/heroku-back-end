import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import routes from './routes';

dotenv.config();
const start = async () => {
  const app = express();
  const connection = await createConnection();
  connection.synchronize;
  app.use(cors());
  app.use(bodyParser.json());
  app.use(routes);

  app.listen(process.env.PORT || 3333);
};
start();
