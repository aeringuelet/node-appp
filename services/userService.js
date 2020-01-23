var Users = require('../models/user/index');
var UserModel = require('../models/user/userModel');

const list = async () => {
    return await Users.list();
}

const getByUserName = async userName => {
    return await Users.getByUserName(userName);
};

const create = async body => {
    let newUser = UserModel({
        userName: body.userName
    });
    
    return await Users.create(newUser)
};

module.exports = {
    list,
    getByUserName,
    create
}