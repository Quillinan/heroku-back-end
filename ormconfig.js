console.log('process.env.Jpdb :>>', process.env.Jpdb);
module.exports = {
  type: 'postgres',
  url: process.env.Jpdb,
  entities: ['build/entity/**/*.js'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
