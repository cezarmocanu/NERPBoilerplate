const Repository = require('./Repository');
const {House} = require('../model/Model');

class HousesRepository extends Repository{
    constructor(){
        super(House);
    }
}

module.exports = new HousesRepository();