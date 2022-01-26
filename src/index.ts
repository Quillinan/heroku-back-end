import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();
createConnection();
app.options('*', cors());
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80');
});
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
