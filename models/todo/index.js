var TodoModel = require('./todoModel');

const list = () => {
    return TodoModel
        .find((err, todos) => {
                if (err) Promise.reject(err);

                return Promise.resolve(todos);
            }
        );
}

const getByUserName = userName => {
    return TodoModel
        .find({ userName },
            (err, todos) => {
                if (err) Promise.reject(err);

                Promise.resolve(todos);
            }
        );
}

const getById = id => {
    return TodoModel
        .findById(id,
            (err, todo) => {
                if (err) Promise.reject(err);

                Promise.resolve(todo);
            }
        );
}

const update = (id, { todo, content, isDone, hasAttachment }) => {
    return TodoModel
        .findByIdAndUpdate(id, {
            todo,
            content,
            isDone,
            hasAttachment
        }, {new: true}, 
        (err, todo) => {
            if (err) Promise.reject(err);

            Promise.resolve(todo);
        }
    )
}

const create = Todo => {    
    return Todo
        .save(err => {
            if (err) Promise.reject(err);

            Promise.resolve(newTodo);
        });
}

const del = id => {
    return TodoModel.findOneAndRemove(id, err => {
        if (err) Promise.reject(err);

        Promise.resolve('Success');
    });
}

module.exports = {
    list,
    getByUserName,
    create,
    update,
    delete: del,
    getById
}