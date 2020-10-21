const {Controller} = require('./controler');

const handlers = {
    get:[
        {
            path:'/',
            handle:(req,res)=>{
                return res.send('hello from all houses')
            }
        },
       
    ],
    post:[],
    put:[],
    del:[]
}

module.exports = new Controller(handlers).router;