var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var cors = require('cors');

var port = process.env.PORT || 4000;

app.use('assets', express.static(__dirname + '/public'));
app.use(cors());

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true, useUnifiedTopology: true });
setupController(app);
apiController(app);

app.listen(port);
