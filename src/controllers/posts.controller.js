const PostModel = require('../models/posts.model');

const getAll = async (req, res) => {
   const posts = await PostModel.selectAll();
   res.json(posts);
};

const getById = async (req, res) => {
    const {postId} = req.params;
    const post = await PostModel.selectById(postId);
    res.json(post);
};

const create = async (req, res) => {
    const result = await PostModel.insert(req.body);
    const newPost = await PostModel.selectById(result.insertId);
    if (!newPost) {
        return res.status(404).json({message: 'No existe post con ese ID'});
    }
    res.status(201).json(newPost);
};

module.exports = { getAll, getById, create }
