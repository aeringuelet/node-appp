var ApiService = require('../services/apiService');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos', async (req, res) => {
        res.send(await ApiService.listTodos());
    });

    app.get('/api/todos/:uname', async ({ params: { uname: userName } }, res) => {
        res.send(await ApiService.getTodoByUserName(userName));
    });

    app.get('/api/todo/:id', async ({ params: { id } }, res) => {
        res.send(await ApiService.getTodoById(id))
    });

    app.post('/api/todos', async ({ body }, res) => {
        res.send(await ApiService.createOrUpdateTodo(body));
    });

    app.delete('api/todo/:id', async ({ params: { id } }, res) => {
        res.send(await ApiService.delete(id))
    });
}