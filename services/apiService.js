var Todos = require('./todoService');
var Users = require('./userService');

// const createTodo = async body => {
//     let user = await Users.getByUserName(body.userName);
    
//     // if user doesn't exist
//     if (user && !user.length) {
//         user = await Users.create({ userName: body.userName }); 
//     }

//     return await Todos.createOrUpdateTodo(body);
// }

const createTodo = async body => {
    return Users.getByUserName(body.userName).then(user => {
        // if user doesn't exist
        if (user && !user.length) {
            return Users.create({ userName: body.userName }).then(user => {
                return Todos.create(body).then(todo => {
                    return todo;
                });
            }); 
        }

        return Todos.create(body).then(todo => {
            return todo;
        });
    });
}

module.exports = { 
    createTodo
}