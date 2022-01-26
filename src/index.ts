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
const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for only example.com.' });
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80');
});
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
