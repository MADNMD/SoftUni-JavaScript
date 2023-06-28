const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getAll = async (search = '', from = 0, to = 6) => {

    const cubes = await Cube.find().lean();
    const result = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));

    return result;
    // return cubes;
}

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.getOneDetails = (cubeId) => Cube.findById(cubeId).populate('accessory');

exports.create = (cube) => Cube.create(cube);

exports.edit = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData); // запазваме едитнатите данни в базата данни;

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessory.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
}