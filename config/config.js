module.exports = {
  "development": {
<<<<<<< HEAD
<<<<<<< HEAD:config/config.json
    "username": "root",
<<<<<<< HEAD:config/config.json
    "password": "",
    "database": "datababydb",
=======
    "password": "sqlpassword",
    "database": "namesdb",
=======
    "username": "process.env.DEV_DB_USER",
    "password": "process.env.DEV_DB_PASSWORD",
    "database": "testdb",
>>>>>>> 45370f02e204805049d5a254bb5326c24147f812:config/config.js
>>>>>>> master:config/config.js
=======
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASSWORD,
    "database": "testdb",
>>>>>>> 5ca624a607fe7821d7cd91750c2147f99ea767f2
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
