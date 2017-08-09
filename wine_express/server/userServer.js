var mysql = require('mysql');
var connection = require('../config/db');
var sql = require('../dao/userDao');

var getUserList = function(req, res, next) {
    var param = req.query || req.params;
    if (param.id != undefined) {
        return getUserById(req, res, next);
    }
    connection.query(sql.getUserList, function(err, result) {
        if (err) throw err;
        
        console.log(result);
        if (result) {
            res.send(result);
        } else {
            res.send("失败");
        }
        
        connection.end();
    });
};

var getUserById = function(req, res, next) {
    var param = req.query || req.params;
    connection.query(sql.getUserById, param.id, function(err, result) {
        if (err) throw err;

        console.log(result);
        if (result) {
            res.send(result);
        } else {
            res.send("失败");
        }
        connection.end();

    });
}

var addUser = function(req, res, next) {
    var param = req.query || req.params;
    connection.query(sql.addUser, [param.name, param.isVip], function(err, result) {
        if (err) throw err;

        console.log(result);
        if (result) {
            var info = {
                code: 1,
                msg: 'ok',
                data: {
                    id: result.insertId
                }
            }
            res.send(info);
        } else {
            res.send("失败");
        }
        connection.end();

    });
}

module.exports = {
    user: getUserList,
    addUser: addUser
};
