const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('select * from authors');
    return result;
};

const selectByAuthor = async (authorId) => {
    const [result] = await db.query(
        'select * from ver_posts_autores where author_id =  ?',
        [authorId]
    );
    // if(result.length === 0) return null
    return result;
};

module.exports = {
    selectAll, selectByAuthor
}

