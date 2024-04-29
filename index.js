const express = require('express');
const app = express();
const { logMiddleware} = require('./middlewares');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');
const PokeController = require('./controllers/PokeController');

app.use(bodyParser.json());
app.use(logMiddleware);
app.use('/users', UserController);
app.use('/poke', PokeController);
app.listen(8000);