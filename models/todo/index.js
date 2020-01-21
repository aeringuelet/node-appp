var Todos = require('./todoModel');

const list = () => {
    return Todos
        .find((err, todos) => {
                if (err) Promise.reject(err);

                return Promise.resolve(todos);
            }
        );
}

const getByUserName = (userName) => {
    return Todos
        .find({ userName },
            (err, todos) => {
                if (err) Promise.reject(err);

                Promise.resolve(todos);
            }
        );
}
// app.get('/api/todo/:id', (req, res) => {
//     Todos
//         .findById(req.params.id, 
//             (err, todo) => {
//                 if (err) throw err;

//                 res.send(todo);
//             }
//         );
// });

// app.post('/api/todos', ({ body }, res) => {
//     if (body._id) {
//         Todos
//         .findByIdAndUpdate(body._id, {
//                 todo: body.todo, 
//                 content: body.content,
//                 isDone: body.isDone,
//                 hasAttachment: body.hasAttachment
//             }, {new: true}, 
//             (err, todo) => {
//                 if (err) throw err;

//                 res.send(todo);
//             }
//         )
//     } else {
//         let newTodo = Todos({
//             username: 'test',
//             todo: body.todo, 
//             content: body.content,
//             isDone: body.isDone,
//             hasAttachment: body.hasAttachment
//         });
        
//         newTodo.save(err => {
//             if (err) throw err;

//             res.send(newTodo);
//         });
//     }
// });

// app.delete('api/todos', ({ body: { id } }, res) => {
//     Todos.findOneAndRemove(id, err => {
//         if (err) throw err;

//         res.send('Success');
//     });
// });

module.exports = {
    list,
    getByUserName
}