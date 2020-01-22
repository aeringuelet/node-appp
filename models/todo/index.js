var TodoModel = require('./todoModel');

const list = async () => {
    return TodoModel
        .find((err, todos) => {
                if (err) throw err;

                return todos;
            }
        );
}

const getByUserName = async userName => {
    return TodoModel
        .find({ userName },
            (err, todos) => {
                if (err) throw err;

                return todos;
            }
        );
}

const getById = async id => {
    return TodoModel
        .findById(id,
            (err, todo) => {
                if (err) throw err;

                return todo;
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
        }, {new: true}, 
        (err, todo) => {
            if (err) throw err;

            return todo;
        }
    )
}

const create = async Todo => {
    return Todo
        .save(err => {
            if (err) throw err;

            return newTodo;
        });
}

const del = async id => {
    return TodoModel.findOneAndRemove(id, err => {
        if (err) throw err;

        return 'Success';
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