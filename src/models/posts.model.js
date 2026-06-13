const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('select * from ver_posts_autores');
    return result;
};

module.exports = {
    selectAll
}
