const PostModel = require('../models/posts.model');

const getAll = async (req, res) => {
   const posts = await PostModel.selectAll();
   res.json(posts);
}

const create = (req, res) => {
    res.send('Crea nuevo post.');
}

module.exports = { getAll, create }
