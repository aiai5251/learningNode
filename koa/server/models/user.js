'use strict';

/**
 *  使用封装的db.js 来创建model
 */
const db = require('.././config/db');

var User = db.defineModel('user', {
    openid: {
        type: db.STRING(100),
        // unique: true
    },
    avatar: db.STRING(200),
    name: db.STRING(100)
});

module.exports = User;

/**
 * 直接使用Sequelize API 来创建，这样需要导入两个头部

const Sequelize = require('sequelize');
const sequelize = require('../config');

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(100),
        // 指定存储在表中的键名称
        field: 'name'
    },
    avatar: Sequelize.STRING(200),
    openid: Sequelize.STRING(100)
},{
	//设置表名跟定义的一样，如果不设置，默认会加s,如 'users'。
    freezeTableName: true,
    //默认会为模型添加 createdAt 和 updatedAt 两个时间戳字段,false 不添加
    timestamps: false
});

module.exports = User;

 */