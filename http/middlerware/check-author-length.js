module.exports = function (request, response, next) {
    if(!request.body.author) {
        return response.status(400).send({message: "author not null"});
    } else if(request.body.author.length>100) {
        return response.status(400).send({message:"author longer 100 characters"})
    }
    next();
};