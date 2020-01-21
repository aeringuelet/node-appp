var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos', (req, res) => {
        Todos
            .find({},
                (err, todos) => {
                    if (err) throw err;

                    res.send(todos);
                }
            );
    });

    app.get('/api/todos/:uname', (req, res) => {
        Todos
            .find({ userName: req.params.uname },
                (err, todos) => {
                    if (err) throw err;

                    res.send(todos);
                }
            );
    });

    app.get('/api/todo/:id', (req, res) => {
        Todos
            .findById(req.params.id, 
                (err, todo) => {
                    if (err) throw err;

                    res.send(todo);
                }
            );
    });

    app.post('/api/todos', ({ body }, res) => {
        if (body._id) {
            Todos
            .findByIdAndUpdate(body._id, {
                    todo: body.todo, 
                    content: body.content,
                    isDone: body.isDone,
                    hasAttachment: body.hasAttachment
                }, {new: true}, 
                (err, todo) => {
                    if (err) throw err;

                    res.send(todo);
                }
            )
        } else {
            let newTodo = Todos({
                username: 'test',
                todo: body.todo, 
                content: body.content,
                isDone: body.isDone,
                hasAttachment: body.hasAttachment
            });
            
            newTodo.save(err => {
                if (err) throw err;

                res.send(newTodo);
            });
        }
    });

    app.delete('api/todos', ({ body: { id } }, res) => {
        Todos.findOneAndRemove(id, err => {
            if (err) throw err;

            res.send('Success');
        });
    });
}