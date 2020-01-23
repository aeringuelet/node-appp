var Todos = require('../models/todo/index');
var TodoModel = require('../models/todo/todoModel');

/* --- Async/await implementation --- */

// const listTodos = async () => {
//     return await Todos.list();
// };

const listTodos = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(Todos.list());
        } catch (err) {
            reject(err)
        }
    });
}

const getTodoByUserName = async userName => {
    return await Todos.getByUserName(userName);
};

const update = async (id, body) => {
    if (id) {
        return await Todos.update(id, body);
    } else {
        throw new Error("Object ID must be included to make the update");
    }
};

const create = async body => {
    let newTodo = TodoModel({
        userName: body.userName,
        todo: body.todo, 
        content: body.content,
        isDone: body.isDone ? body.isDone : false,
        hasAttachment: body.hasAttachment
    });
    
    return await Todos.create(newTodo)
};

const del = async id => {
    return await Todos.delete(id);
};


/* --- Promises implementation --- */

// const listTodos = () => {
//     return Todos.list().then(todos => {
//         return todos;
//     });
// };

// const getTodoByUserName = userName => {
//     return Todos.getByUserName(userName).then(todo => {
//         return todo;
//     });
// };

// const getTodoById = id => {
//     return Todos.getById(id).then(todo => {
//         return todo;
//     });
// };

// const createOrUpdateTodo = body => {
//     if (body._id) {
//         return Todos.update(body._id, body).then(todo => {
//             return todo;
//         });
//     } else {
//         let newTodo = Todos({
//             username: 'test',
//             todo: body.todo, 
//             content: body.content,
//             isDone: body.isDone,
//             hasAttachment: body.hasAttachment
//         });
        
//         return Todos.create(newTodo).then(todo => {
//             return todo;
//         })
//     }
// };

// const del = async id => {
//     return Todos.delete(id).then(result => {
//         return result;
//     });
// };

/* --- Callback implementation example --- */

const getTodoById = (id, callback) => {
    Todos.getById(id, callback);
};

module.exports = {
    listTodos,
    getTodoByUserName,
    create,
    update,
    getTodoById,
    delete: del
}