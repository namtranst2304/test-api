const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres", 
    port: 5432,
    password: "23041994nam", 
    database: "postgres"
})

module.exports = client