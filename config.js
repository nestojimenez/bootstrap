const {Client} = require('pg')

const dabaseConfig = {
    user: 'postgres',
    password: 'Nesto982',
    host: '127.0.0.1',
    port: 5432,
    database: 'postgress_test'
}

const client = new Client(dabaseConfig);

module.exports = client;