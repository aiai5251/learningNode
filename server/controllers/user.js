'use strict';
/*
const model = require('.././config/model');
let User = model.user;

var fn_index = async (ctx, next) => {
    var users = await User.findAll();
    // ctx.response.type = 'application/json';
    console.log('body id : ' + ctx.params.id);
    console.log('id = ' + ctx.request.query.id);
    console.log('id : ' + ctx.query.id);

    // if (id != undefined) {
    //     // ctx.request.body = 
    // }

    ctx.response.body = {
        data: users
    };

    // ctx.response.body = `<h1>Index</h1>
    //     <form action="/signin" method="post">
    //         <p>Name: <input name="name" value="koa"></p>
    //         <p>Password: <input name="password" type="password"></p>
    //         <p><input type="submit" value="Submit"></p>
    //     </form>`;
};
*/


/**
 * 这个POST请求无法在浏览器中直接测试。
 * 但是我们可以通过curl命令在命令提示符窗口测试这个API。
 * 我们输入如下命令：
 * curl -H 'Content-Type: application/json' -X POST -d '{"name":"koa","password":"12345"}' http://localhost:3000/signin
 */
// var fn_signin = async (ctx, next) => {
//     var
//         name = ctx.request.body.name || '',
//         password = ctx.request.body.password || '';
//     console.log(`signin with name: ${name}, password: ${password}`);
//     if (name === 'koa' && password === '12345') {
//         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//     } else {
//         ctx.response.body = `<h1>Login failed!</h1>
//         <p><a href="/">Try again</a></p>`;
//     }
// };

// module.exports = {
//     'GET /wine': fn_index,
//     'POST /signin': fn_signin
// };


// const router = require('koa-router')();

// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     console.log('name = ' + name);
//     ctx.response.body = '<h1>Hello,' + name + '!</h1>';
// });

// router.get('/', async (ctx, next) => {
//     // ctx.response.body = '<h1>Index</h1>';
//     ctx.response.body = `<h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// });

// router.post('/signin', async(ctx, next) => {
//     var name = ctx.request.body.name;
//     var password = ctx.request.body.password;
//      if (name === 'koa' && password === '12345') {
//         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//     } else {
//         ctx.response.body = `<h1>Login failed!</h1>
//         <p><a href="/">Try again</a></p>`;
//     }
// });