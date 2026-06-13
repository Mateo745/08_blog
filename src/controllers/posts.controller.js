const getAll = (req, res) => {
    res.send('Recupera todos los posts,....');
}

const create = (req, res) => {
    res.send('Crea nuevo post.');
}

module.exports = { getAll, create }
