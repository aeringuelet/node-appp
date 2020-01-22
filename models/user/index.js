var UserModel = require('./userModel');

const list = async () => {
    return UserModel
        .find()
        .then(users => users)
        .catch(err => { throw err });
}

const getByUserName = async userName => {
    return UserModel
        .find({ userName })
        .then(users => users)
        .catch(err => { throw err });
}

const getById = async id => {
    return UserModel
        .findById(id)
        .then(user => user)
        .catch(err => { throw err });
}

const update = async (id, { userName }) => {
    // return UserModel
    //     .findByIdAndUpdate(id, {
    //         user,
    //         content,
    //         isDone,
    //         hasAttachment
    //     }, {new: true})
    //     .then(user => user)
    //     .catch(err => { throw err });
}

const create = async User => {
    return User
        .save()
        .then(newUser => newUser)
        .catch(err => { throw err });
}

const del = async id => {
    return UserModel.deleteOne({ _id: id })
    .then(deletedUser => 'Success')
    .catch(err => { throw err });
}

module.exports = {
    list,
    getByUserName,
    create,
    update,
    delete: del,
    getById
}