const Connection = require('../../database/connection');
const PublisherFactory = require('../../src/publisher/publisher-factory');
class PublisherSearchCondition {

    /**
     * @param {Connection}connection
     */
    constructor (connection){
        this.connection = connection;
    }

    /**
     *
     * @return {Promise}
     */
    describe(id) {
        let sqlQuery = this.connection.select().from('publishers').where({id : id}).andWhere({deleted_at:null});
        let factory = new PublisherFactory();
        return sqlQuery.then(results => results.map(element => factory.make(element)));

    }
}

module.exports = PublisherSearchCondition;
