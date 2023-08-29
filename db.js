// <<<<<<< HEAD
// Import the Pool class from the 'pg' module.
// The Pool class is used to create a pool of reusable connections to a PostgreSQL database.
// const { Pool } = require("pg");

// Create a new Pool object.
// This will create a pool of connections to the PostgreSQL database specified by the configuration object.
// Each property of this object is a parameter for connecting to the database.
// const pool = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
// });

// module.exports = pool;

// Knex DB file

// const knex = require("knex");

// const knexfile = require("./knexfile");

// const env = process.nextTick.NODE_ENV || "development"
// const configOptions = knexfile[env];
// =======
const knex = require("knex");

const knexfile = require("./knexfile");

const env = process.env.NODE_ENV || "development"
const configOptions = knexfile[env];
// >>>>>>> testingConnection

module.exports = knex(configOptions)

// const Pool = require("pg").Pool;
// require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// };

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// const proConfig = process.env.DATABASE_URL; //heroku addons

// const pool = new Pool({
//   connectionString:
//     process.env.NODE_ENV === "production" ? proConfig : devConfig,
// });

// module.exports = pool;