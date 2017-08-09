'use strict';

// 扫描controller目录，找到所有的js
var fs = require('fs');
var path = require('path');

// // 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    var workdir = path.resolve('.'); 
    console.log('workdir:' + workdir);
    var files = fs.readdirSync(workdir + '/server/' + dir);
    console.log('files : ' + files);
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(workdir + `/server/${dir}/` + f);
        addMapping(router, mapping);
    }
}

function addRouters(dir) {
    // 如果不传参数，扫描目录默认为'controllers'
    let controllers_dir = dir || 'controllers';
    addControllers(router, controllers_dir);
    return router.routes();
}

module.exports = addRouters;


