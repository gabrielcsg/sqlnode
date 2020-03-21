const express = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ ok: true }));

// Users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// Addresses
routes.post('/users/:user_id/address', AddressController.store);
routes.get('/users/:user_id/address', AddressController.index);

// Techs
routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);

// Report
routes.get('/report', ReportController.show);


module.exports =  routes;