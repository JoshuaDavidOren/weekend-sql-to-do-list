// set up connection to database
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'the_never_ending_list',
    host: 'localhost',
    port: 5432,
    max: 9001,
    idleTimeoutMillis: 30000,
};

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log(('Postgres in the HOUSE '));
});

pool.on('err', (client) => {
    console.log('Unexspected error, client are you there?');
});
// access to this^^^ in other code for query's
module.exports = pool