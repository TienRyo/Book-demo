const Book      = require('./book');
const Publisher = require('../publisher/publisher');

class BookFactory{

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    makeFromDB(bookRaw) {
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setId(bookRaw.id);
        book.setPrice(bookRaw.price);
        let publisher = new Publisher(bookRaw.name);
        publisher.setId(bookRaw.publisher_id);
        publisher.setAddress(bookRaw.address);
        publisher.setPhone(bookRaw.phone);
        book.setPublisher(publisher);
        console.log(book);
        return book;
    }

    /**
     *
     * @param bookRaw
     * @return {Promise<Book>}
     */
    makeFromRequest(bookRaw) {
        let searchPublisher = bookRaw.app.get('publisher.searcher');
        return searchPublisher.describe(bookRaw.body.publisher_id)
            .then(result=> {
                let book = new Book(bookRaw.body.title, bookRaw.body.author);
                book.setPrice(bookRaw.body.price);
                book.setId(bookRaw.params.id);
                book.setPublisher(result[0]);
                return book;
            });
    }
}

module.exports = BookFactory;

