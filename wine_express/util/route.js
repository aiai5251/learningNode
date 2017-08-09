'use strict';

var fs = require('fs');
var path = require('path');

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

function addRouter(router, dir) {
    var workdir = path.resolve('.');
    var files = fs.readdirSync(workdir + '/' + dir);
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process server: ${f}...`);
        let mapping = require(workdir + `/${dir}/` + f);
        addMapping(router, mapping);
    }
}

function addRouters(router, dir) {
    let routers_dir = dir || 'routes';
    addRouter(router, routers_dir);
    return router;
}

module.exports = addRouters;
