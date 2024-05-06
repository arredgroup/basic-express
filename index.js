const express = require('express');
const app = express();
const { logMiddleware} = require('./middlewares');
const bodyParser = require('body-parser');

const UserController = require('./controllers/UserController');

app.use(bodyParser.json());
app.use(logMiddleware);
app.use('/users', UserController);
app.listen(8000);