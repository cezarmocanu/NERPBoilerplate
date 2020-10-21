const express = require('express');
const app = express();
const port = 8080;
const UsersController = require('./controllers/UserController');
const HousesController = require('./controllers/HousesController');

app.use('/users',UsersController);
app.use('/houses',HousesController);

app.listen(port,()=>{
    console.log(`Listening on port ${port} ...`);
});





