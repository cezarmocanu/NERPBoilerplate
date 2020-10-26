const Repository = require('./Repository');
const {User} = require('../model');

class UserRepository extends Repository {
    constructor(){
        super(User);
    }
}

module.exports = new UserRepository();