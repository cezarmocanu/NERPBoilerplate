const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const syncDb = false;

const UsersController = require('./controllers/UserController');
const HousesController = require('./controllers/HousesController');
const Connection = require('./Connection');

//aplicam functii pe req,res
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//adaugam in routerul app routere mici
app.use('/users',UsersController);
app.use('/houses',HousesController);


app.listen(port,async ()=>{
    try{
        await Connection.authenticate();
        if(syncDb)
            Connection.sync({force:true});
        console.log(`Listening on port ${port} ...`);
    }
    catch(error){
        console.log(error);
    }
});





