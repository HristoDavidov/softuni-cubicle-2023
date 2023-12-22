const uniqid = require('uniqid');
const cubes = [
    {
        id: '7y04a50lqf43cnr',
        name: 'Mirror Cube',
        description: 'A cool mirror cube',
        imageUrl: 'https://img.fruugo.com/product/3/60/696637603_max.jpg',
        difficultyLevel: 4,
    },
    {
        id: '7y94a70lsf43cnr',
        name: 'Rubic cube',
        description: 'A clasic cube',
        imageUrl:'https://m.media-amazon.com/images/I/81a7IEinLiL.jpg',
        difficultyLevel: 2,
    }
];

exports.getAll = (search, from, to) => {

  let result =  cubes.slice();

  if(search){
    result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
  };

  if(from){
    result = result.filter(cube => cube.difficultyLevel >= Number(from));
  };

  if(to){
    result = result.filter(cube => cube.difficultyLevel <= Number(to));
  };

  return result;
}; 
exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };
    cubes.push(newCube);

    return newCube;
};