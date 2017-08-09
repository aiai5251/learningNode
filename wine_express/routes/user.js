'use strict';

var userServer = require('../server/userServer');

/* GET users listing. */
var user = function(req, res, next) {
  userServer.user(req, res, next);
};

var adduser = function(req, res, next) {
  userServer.addUser(req, res, next);
};

module.exports = {
  'GET /user': user,
  'GET /adduser': adduser
};
