const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getAll = async (search = '', from = 0, to = 6) => {

    let cubes = await Cube.find().lean();
    // let cubes = await Cube.find({ name: { $regex: new RegExp(search, 'i') } }).where('difficultyLevel').lte(to).gte(from).lean();
    const result = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));

    return result;
    // return cubes;
}
exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getOneDetails = (cubeId) => Cube.findById(cubeId).populate('accessory');//populate кара данните от accessory,който сме добавили в модела да се закачат автоматично за куба;

exports.create = (cube) => Cube.create(cube);

exports.attachAccessory = async (cubeId, accessoryId) => {

    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessory.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
}