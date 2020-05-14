const db = require('../database');

module.exports = {
    getAll (req, res){
        res.render('superheroes/index', { superhero: db.superhero.getAll() });
    },
    getByIndex (req, res){
        res.render('superheroes/show', { superhero: db.superhero.getByIndex(req.params.index) });
    }
};