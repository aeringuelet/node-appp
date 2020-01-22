var ApiService = require('../services/apiService');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    /* --- Async await implementation --- */ 

    app.get('/api/todos', async (req, res) => {
        res.send(await ApiService.listTodos());
    });

    app.get('/api/todos/:uname', async ({ params: { uname: userName } }, res) => {
        res.send(await ApiService.getTodoByUserName(userName));
    });

    // app.get('/api/todo/:id', async ({ params: { id } }, res) => {
    //     res.send(await ApiService.getTodoById(id))
    // });

    app.post('/api/todos', async ({ body }, res) => {
        res.send(await ApiService.createOrUpdateTodo(body));
    });

    app.delete('api/todo/:id', async ({ params: { id } }, res) => {
        res.send(await ApiService.delete(id))
    });


    /* --- Promises implementation --- */ 

    // app.get('/api/todos', (req, res) => {
    //     ApiService.listTodos().then((todos => {
    //         res.send(todos);
    //     }));
    // });

    // app.get('/api/todos/:uname', async ({ params: { uname: userName } }, res) => {
    //     ApiService.getTodoByUserName(userName).then(todo => {
    //         res.send(todo);
    //     });
    // });

    // app.get('/api/todo/:id', async ({ params: { id } }, res) => {
    //     ApiService.getTodoById(id).then(todo => {
    //         res.send(todo);
    //     });
    // });

    // app.post('/api/todos', async ({ body }, res) => {
    //     ApiService.createOrUpdateTodo(body).then(todo => {
    //         res.send(todo);
    //     });
    // });

    // app.delete('api/todo/:id', async ({ params: { id } }, res) => {
    //     ApiService.delete(id).then(result => {
    //         res.send(result);
    //     });
    // });

    /* --- Callback implementation example --- */ 

    app.get('/api/todo/:id', async ({ params: { id } }, res) => {
        let buildResponse = result => {
            res.send(result);
        }
        
        ApiService.getTodoById(id, buildResponse);
    });
}