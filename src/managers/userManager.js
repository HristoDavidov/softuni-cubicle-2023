const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const User = require('../models/User');
const { SECRET } = require('../config/config');

exports.register = (userData) => User.create(userData);


exports.login = async (username, password) => {
    //TODO find user
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Cannot find user or password');
    };

    //TODO validate password
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw new Error('Cannot find user or password');
    };

    const payload = {
        _id: user._id,
        username: user.username,

    };

    const token = await jwt.sing(payload, SECRET, {expiresIn: '2d'});

    //return token
    return token;
};