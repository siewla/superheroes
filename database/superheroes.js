
// const { superhero } = require('../models');
let request = require ('request');
let superheroes =[];

for (let i=1;i<200;i++){
    const url = `https://www.superheroapi.com/api.php/2785821668194196/${i}`;
    request({
        url: url,
        json: true
    }, function (error, response, data) {
        if (!error && response.statusCode === 200) {
            superheroes.push(data);
        }
    });
}

// const buildSuperhero =({ name, powers }) =>{
//     return new superhero(name, powers);
// };

module.exports = {
    getAll () {
        return superheroes;
    },
    getByIndex (index) {
        return superheroes[index];
    }
};