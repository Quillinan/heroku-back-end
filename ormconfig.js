// console.log('process.env.Jpdb :>>', process.env.Jpdb);
// Jpdb = postgres://milton:Machado17@localhost:5432/produtosbesafe
require('dotenv').config();
module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  entities: ['build/entity/**/*.js', 'build/entity/*.js'],
  ssl: true,
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
