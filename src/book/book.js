const Publisher = require('../publisher/publisher');

class Book{

    /**
     * 
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * 
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     * 
     * @return {string}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * 
     * @return {Publisher}
     */
    getPublisher() {
        return this.publisher;
    }

    /**
     * 
     * @return {number}
     */
    getPrice() {
        return this.price;
    }

    /**
     * 
     * @return {int}
     */
    getId() {
        return this.id;
    }

    /**
     * 
     * @param {Publisher} publisher
     */
    setPublisher(publisher) {
        this.publisher = publisher;
    }

    /**
     * 
     * @param {number} price
     */
    setPrice(price) {
        this.price = price;
    }

    /**
     * 
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {{id: int, title: string, author: string, publisher: <void>, price: number}}
     */
    toJson() {
        return {
            id       :this.getId(),
            title    :this.getTitle(),
            author   :this.getAuthor(),
            publisher:this.getPublisher() ? this.getPublisher() : null,
            price    :this.getPrice() ? this.getPrice() : null
        }
    }
    
}

module.exports = Book;
