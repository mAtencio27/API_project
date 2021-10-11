// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1', //local host
      user : process.env.DB_USER,
      port : process.env.DB_PORT,
      password : process.env.DB_PW,
      database : process.env.DB_NAME
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/knex/migrations',
    },

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
