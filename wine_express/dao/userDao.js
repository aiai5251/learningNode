var user = {
    getUserList: 'select * from user',
    getUserById: 'select * from user where id = ?',
    addUser: 'insert into user(name, isVip) values (?, ?)'
};

module.exports = user;