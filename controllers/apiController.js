var Todos = require('../models/todo/todoModel');
var ApiService = require('../services/apiService');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos', async (req, res) => {
        res.send(await ApiService.listTodos());
    });

    app.get('/api/todos/:uname', async (req, res) => {
        res.send(await ApiService.getTodoByUserName(req.params.uname));
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