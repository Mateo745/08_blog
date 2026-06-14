const AuthorModel = require ('../models/authors.model');

const getAll = async (req, res) => {
    const authors = await AuthorModel.selectAll();
    res.json(authors);
}

const getById = async (req, res) => {
    const { authorId } = req.params;
    const author = await AuthorModel.selectById(authorId)
    res.json(author);
}

const getByAuthor = async (req, res) => {
    const { authorId } = req.params;
    const posts = await AuthorModel.selectByAuthor(authorId);
    res.json(posts);
}

const create = async (req, res) => {
    const result = await AuthorModel.insert(req.body);
    const newAuthor = await AuthorModel.selectById(result.insertId);
    if (!newAuthor) {
        return res.status(404).json({message: 'No existe autor con ese ID'});
    }
    res.status(201).json(newAuthor);
};

module.exports = { getAll, getById, getByAuthor, create }
