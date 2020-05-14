const { superhero } = require('../models');

const superheroes = [
    {
        name: 'Lex Luthor', 
        powers: ['super brain']
    },
    {
        name: 'Ares', 
        powers: ['shape shifting', 'teleporting']
    },
    {
        name: 'Killmonger', 
        powers: ['ability to fit in Black Panther\'s suit', 'internet agreement that he looks badass']
    }
];

const buildSuperhero =({ name, powers }) =>{
    return new superhero(name, powers);
};

module.exports = {
    getAll () {
        return superheroes.map(buildSuperhero);
    },
    getByIndex (index) {
        return buildSuperhero(superheroes[index]);
    }
};