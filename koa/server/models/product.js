'use strict';

const db = require('.././config/db');

var Product = db.defineModel('product', {
    title: db.STRING(100),
    submessage: db.STRING(200),
    price: db.DOUBLE,
    volume: db.INTEGER,
    image: db.STRING(100),
    description: db.STRING(200),
    origprice: db.INTEGER,
    count: db.INTEGER,
    description_image: db.STRING(200),
    sales: db.INTEGER,
    invalid: db.INTEGER
});

module.exports = Product;