require("dotenv").config();

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.RDSUSER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    debug: true,
    migrations: {
      onError: function (error, _obj, _qb) {
        if (error.code === "ETIMEOUT") {
          console.error("Connection timeout occured:", error)
        } else {
          console.error("Error occurred during migration:", error)
        }
      }
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.RDSUSER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      ssl: {
        ca: fs.readFileSync("../CovidTracker-TOPS2023/config/config/rds-combined-ca-bundle.pem"), // Provide the path to your CA certificate
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
