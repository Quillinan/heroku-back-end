console.log('process.env.DATABASE_URL :>>', process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  port: '5432',
  host: 'ec2-52-23-87-65.compute-1.amazonaws.com',
  user: 'bjquwqlfbhdybb',
  password: '037f244f6c4a3727c8e1c3f50d3b02435f4e4b66917780634c83d741c90e0c56',
  database: 'd3keukgq886hr8',
  synchronize: true,
  logging: false,
  entities: ['build/entity/**/*.js'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
