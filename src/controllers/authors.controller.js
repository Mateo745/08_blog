const AuthorModel = require ('../models/authors.model');

const getAll = async (req, res) => {
    const authors = await AuthorModel.selectAll();
    res.json(authors);
    ;
}

const getByAuthor = async (req, res) => {
    const { authorId } = req.params;
    const posts = await AuthorModel.selectByAuthor(authorId);
    res.json(posts);
}

const create = (req, res) => {
    console.log(req.body);
    res.send('Se crea un autor');
}

module.exports = { getAll, create, getByAuthor }
