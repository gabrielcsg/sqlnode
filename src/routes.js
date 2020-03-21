const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ ok: true }));

// Users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// Address
routes.post('/users/:user_id/address', AddressController.store);
routes.get('/users/:user_id/address', AddressController.index);



module.exports =  routes;