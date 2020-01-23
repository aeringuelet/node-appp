var ApiService = require('../services/apiService');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/api/todos', async ({ body }, res) => {
        res.send(await ApiService.createTodo(body));
    });

}