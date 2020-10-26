const {Controller} = require('./Controller');
const {HouseRepository} = require('../repos');
const {createCRUDHandlers} = require('./ControllerModels');

const crud = createCRUDHandlers(HouseRepository);

const handlers = {
    ...crud
}

module.exports = new Controller(handlers).router;