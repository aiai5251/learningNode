//扫描所有的model
const fs = require('fs');
var path = require('path');

const db = require('./db');

let files = fs.readdirSync(path.resolve('.') + '/server/models');

let js_files = files.filter((f) => {
    return f.endsWith('.js');
}, files);

module.exports = {};

for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(path.resolve('.') + '/server/models/' + f);
}

module.exports.sync = () => {
    db.sync();
};