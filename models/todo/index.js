var TodoModel = require('./todoModel');

const list = async () => {
    return TodoModel
        .find()
        .then(todos => todos)
        .catch(err => { throw err });
}

const getByUserName = async userName => {
    return TodoModel
        .find({ userName })
        .then(todos => todos)
        .catch(err => { throw err });
}

const getById = (id, callback) => {
    return TodoModel
        .findById(id,
            (err, todo) => {
                if (err) throw err;

                callback(todo);
            }
        );
}

const update = async (id, { todo, content, isDone, hasAttachment }) => {
    return TodoModel
        .findByIdAndUpdate(id, {
            todo,
            content,
            isDone,
            hasAttachment
        }, {new: true})
        .then(todo => todo)
        .catch(err => { throw err });
}

const create = async Todo => {
    return Todo
        .save()
        .then(newTodo => newTodo)
        .catch(err => { throw err });
}

const del = async id => {
    return TodoModel.deleteOne({ _id: id })
    .then(deletedTodo => 'Success')
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