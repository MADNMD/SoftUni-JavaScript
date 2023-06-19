const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.getAll = (search = '', from = 0, to = 6) => { //долния ред важи ако не задаваме дефолтни параметри;
    // const result = cubes.filter(cube => cube.name.toLowerCase().includes(search?.toLowerCase() || '')); //Ако search е undefined с ?(optional chaining) му казваме да не гърми и  връщаме празен string;
    const result = cubes
    .filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(cube => cube.difficultyLevel >= from && cube.difficultyLevel <= to);
    // .filter(cube => cube.difficultyLevel >= from && cube.difficultyLevel <= to);
    return result;

};
exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {

    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });

    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), { encoding: 'utf-8' });
}
