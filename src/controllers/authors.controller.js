const getAll = (req, res) => {
    res.send('Recupera todos los autores');
}

const create = (req, res) => {
    res.send('Se crea un autor');
};

module.exports = { getAll, create }
