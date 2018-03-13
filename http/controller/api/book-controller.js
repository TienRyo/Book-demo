class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        response.render('index');
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(result=> {
            response.status(201).json(result.toJson());
        }).catch(next);
    }

    deleteBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(()=> {
            response.status(200).json({message:'Success'});
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then((result)=> {
            response.json(result);
        });
    }


    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((results) => response.status(200).send(results.map(result => result.toJson())))
            .catch(next)
    }
}

module.exports = BookController;