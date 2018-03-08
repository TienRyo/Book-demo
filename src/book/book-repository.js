const Book = require('./book');
const Connection = require('../../database/connection');

class BookRepository{

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Book} book
     * @return {Promise <void>}
     */
    add(book) {
        return this.connection('books').insert({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher_id: book.getPublisher() ? book.getPublisher().getId() : null,
            price: book.getPrice()? book.getPrice() : null
        }).then(insertedIds => {
            book.setId(insertedIds[0]);
            return book
        });
    }

    /**
     *
     * @param {Book} book
     * @return {Promise <void>}
     */
    edit(book) {
        return this.connection('books').update({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher_id: book.getPublisher() ? book.getPublisher().getId(): null,
            price: book.getPrice() ? book.getPrice() : null
        }).where({
            id: book.getId()
        }).then(()=>book);
    }


    /**
     *
     * @param {INT} id
     * @return {Promise <void>}
     */
    remove(id) {
        return this.connection('books').update({
            deleted_at: new Date().toLocaleString()
        }).where({
            id: id
        });
    }


}

module.exports = BookRepository;
