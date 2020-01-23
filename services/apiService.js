var Todos = require('./todoService');
var Users = require('./userService');

// use this service as wrapper of the other entities (todos, users) and orchestrate them 
const createTodo = async body => {
    let user = await Users.getByUserName(body.userName);
    
    if (user && !user.length) {
        user = await Users.create({ userName: body.userName }); 
    }

    return await Todos.createOrUpdateTodo(body);
}

module.exports = { 
    createTodo
}