const { superheroesController } = require('../controllers');

module.exports = app => {
    app.get('/superheroes', superheroesController.getAll);
    app.get('/superheroes/:index', superheroesController.getByIndex);
};