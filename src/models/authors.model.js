const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('select * from authors');
    return result;
};

const selectById = async(authorId) => {
    const [result] = await db.query(
        'select * from authors where authorId = ?',
        [authorId]
    );
    if(result.length === 0) return null;
    return result[0];
};

const selectByAuthor = async (authorId) => {
    const [result] = await db.query(
        'select * from ver_posts_autores where author_id =  ?',
        [authorId]
    );
    // if(result.length === 0) return null
    return result;
};

const insert = async({email, name, image}) => {
    const [result] = await db.query(
        'INSERT INTO authors (email, name, image) VALUES(?, ?, ?)',
        [email, name, image]
    );
    return result;
}

module.exports = {
    selectAll, selectById ,selectByAuthor, insert
}

