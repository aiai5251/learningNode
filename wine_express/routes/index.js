// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var homeGet = function(req, res, next) {
  res.render('index', { title: 'Express' });
};


module.exports = {
  'GET /': homeGet
};
