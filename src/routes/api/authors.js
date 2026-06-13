const { getAll, create, getByAuthor } = require('../../controllers/authors.controller');

const router = require('express').Router();

router.get('/', getAll);
router.get('/:authorId/posts', getByAuthor);
router.post('/', create);

module.exports = router;