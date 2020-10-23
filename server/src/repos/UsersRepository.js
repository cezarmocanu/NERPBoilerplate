const Repository = require('./Repository');
const {User} = require('../model/Model');

class UserRepository extends Repository{
    constructor(){
        super(User);
    }
}

module.exports = new UserRepository();