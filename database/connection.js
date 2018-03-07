const connection = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : 'anhtien1996',
        database : 'bookdemo'
    },
    useNullAsDefault: true
});

module.exports = connection;