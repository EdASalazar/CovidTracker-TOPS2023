const knex = require("knex");

const knexfile = require("./knexfile")

const env = process.nextTick.NODE_ENV || "development"
const configOptions = knexfile[env]

module.exports = knex(configOptions)