const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('select * from ver_posts_autores');
    return result;
};

const selectById = async (postId) => {
    const [result] = await db.query(
        'select * from ver_posts_autores where post_id = ?',
        [postId]
    );
    if(result.length === 0) return null;
    return result[0];
};

const insert = async ({title, description, category, authorsId}) => {
    const [result] = await db.query(
        'INSERT INTO posts (title, description, category, authorsId) VALUES(?, ?, ?, ?)',
        [title, description, category, authorsId]    
    );
    return result;
};

module.exports = {
    selectAll, selectById, insert
}
