'use strict';

const APIError = require('.././config/api').APIError;
const model = require('.././config/model');
let Product = model.product;


var products = async(ctx, next) => {
    var product = await Product.findAll();
    if (product) {
        // 使用之前需要在app.js 中绑定
        ctx.rest({
            data: product
        });
    } else {
        throw new APIError('0', 'no product');
    }
    
};

module.exports = {
    'GET /wine/product' : products
};

// var fn_hello = async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// };

// module.exports = {
//     'GET /hello/:name': fn_hello
// };