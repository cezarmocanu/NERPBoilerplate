const {Controller} = require('./controler');

const handlers = {
    get:[
        {
            path:'/',
            handle:(req,res)=>{
                return res.send('hello from all users')
            }
        },
        {
            path:'/single',
            handle:(req,res)=>{
                return res.send('hello from single users')
            }
        },
        {
            path:'/any',
            handle:(req,res)=>{
                return res.send('hello from any users')
            }
        }
    ],
    post:[],
    put:[],
    del:[]
}

module.exports = new Controller(handlers).router;