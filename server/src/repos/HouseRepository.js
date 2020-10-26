const Repository = require('./Repository');
const {House} = require('../model');

class HouseRepository extends Repository {
    constructor(){
        super(House);
    }
}

module.exports = new HouseRepository();