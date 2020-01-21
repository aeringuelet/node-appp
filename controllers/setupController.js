var Todos = require('../models/todoModel');

module.exports = app => {
    app.get('/api/setupTodos', (req, res) => {
        var starterTodos = [
            {
                userName: 'root',
                todo: 'Take a shower',
                content: 'Lorem ipsum',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'root',
                todo: 'Feed the cat',
                content: 'Lorem ipsum',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'root',
                todo: 'Take the NodeJs course',                
                content: 'Lorem ipsum',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, (err, results) => {
            res.send(results);
        });
    });
}