class PublisherSearchCondition {

    /**
     *
     * @param {string} name
     */
    constructor (name){
        this.name = name;
    }

    /**
     *
     * @param sqlQuery
     * @return {Publisher[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where('name', 'like', '%' + this.name + '%')
            .where({'books.deleted_at': null})
    }
}

module.exports = PublisherSearchCondition;
