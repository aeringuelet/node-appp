var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    userName: String,
    todo: String,
    content: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;