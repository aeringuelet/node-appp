var todoService = require('../services/todoService');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    /* --- Async await implementation --- */ 

    app.get('/api/todos', async (req, res) => {
        res.send(await todoService.listTodos());
    });

    app.get('/api/todos/:uname', async ({ params: { uname: userName } }, res) => {
        res.send(await todoService.getTodoByUserName(userName));
    });

    app.delete('/api/todo/:id', async ({ params: { id } }, res) => {
        res.send(await todoService.delete(id))
    });

    app.put('/api/todo/:id', async ({ params: { id }, body }, res) => {
        res.send(await todoService.update(id, body));
    });


    /* --- Promises implementation --- */ 

    // app.get('/api/todos', (req, res) => {
    //     todoService.listTodos().then((todos => {
    //         res.send(todos);
    //     }));
    // });

    // app.get('/api/todos/:uname', async ({ params: { uname: userName } }, res) => {
    //     todoService.getTodoByUserName(userName).then(todo => {
    //         res.send(todo);
    //     });
    // });

    // app.get('/api/todo/:id', async ({ params: { id } }, res) => {
    //     todoService.getTodoById(id).then(todo => {
    //         res.send(todo);
    //     });
    // });

    // app.post('/api/todos', async ({ body }, res) => {
    //     todoService.createOrUpdateTodo(body).then(todo => {
    //         res.send(todo);
    //     });
    // });

    // app.delete('api/todo/:id', async ({ params: { id } }, res) => {
    //     todoService.delete(id).then(result => {
    //         res.send(result);
    //     });
    // });

    /* --- Callback implementation example --- */ 

    app.get('/api/todo/:id', async ({ params: { id } }, res) => {
        let buildResponse = result => {
            res.send(result);
        }
        
        todoService.getTodoById(id, buildResponse);
    });
}