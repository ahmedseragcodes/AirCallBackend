// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: ((conn, done)=>{
        conn.run("PRAGMA foreign_keys = ON", done);
      })
    }
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "./data/test.db3"
    },
    pool: {
      afterCreate: ((conn, done)=>{
        conn.run("PRAGMA foreign_keys=ON", done);
      })
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
   client: `sqlite3`,
   useNullAsDefault: true,
   connection: {
     filename: "./data/production.db3"
   },
   pool: {
     afterCreate: ((conn, done)=>{
      conn.run("PRAGMA foreign_keys = ON", done)
     })
   },
   migrations: {
     directory: "./data/migrations"
   },
   seeds: {
     directory: "./data/seeds"
   }
  }

};
