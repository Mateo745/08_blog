const { getAll, create, getByAuthor, getById } = require('../../controllers/authors.controller');

const router = require('express').Router();

router.get('/', getAll);
router.get('/:authorId', getById);
router.get('/:authorId/posts', getByAuthor);
router.post('/', create);

module.exports = router;