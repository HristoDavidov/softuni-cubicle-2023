const { promisify} = require('util');
const jsonwebtoken = require('jsonwebtoken');

const jwt = {
    sing: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
};

module.exports = jwt;