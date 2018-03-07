module.exports = function (request, response, next) {
    if(!request.body.title) {
        return response.status(400).send({message: "title not null"});
    } else if(request.body.title.length>100) {
        return response.status(400).send({message:"title longer 100 characters"})
    }
    next();
};