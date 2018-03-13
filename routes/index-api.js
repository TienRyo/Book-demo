const express         = require('express');
const router          = express.Router();
const BookController  = require('../http/controller/book-controller');
const check           = require('../http/middlerware');
const checkAuthor     = require('../http/middlerware/check-author-length');
const checkTitle      =  require('../http/middlerware/check-title-length');

let bookController = new BookController();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('home.njk');
});

router.get('/books', check.searchCondition, bookController.search);

router.get('/book/:id', check.searchCondition, bookController.search);

router.post('/book', check.bookRequest, checkTitle, checkAuthor, bookController.createBook);

router.put('/book/:id', check.bookRequest, checkTitle, checkAuthor, bookController.editBook);

router.delete('/book/:id', bookController.deleteBook);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);


module.exports = router;
