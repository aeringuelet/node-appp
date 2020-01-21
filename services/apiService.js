var Todos = require('../models/todo/index');

const listTodos = async () => {
    return await Todos.list();
};

const getTodoByUserName = async userName => {
    return await Todos.getByUserName(userName);
};

const getTodoById = async id => {
    return await Todos.getById(id);
};

const createOrUpdateTodo = async body => {
    if (body._id) {
        return await Todos.update(body._id, body);
    } else {
        let newTodo = Todos({
            username: 'test',
            todo: body.todo, 
            content: body.content,
            isDone: body.isDone,
            hasAttachment: body.hasAttachment
        });
        
        return await Todos.create(newTodo)
    }
};


const del = async id => {
    return await Todos.delete(id);
};

module.exports = {
    listTodos,
    getTodoByUserName,
    createOrUpdateTodo,
    getTodoById,
    delete: del
}