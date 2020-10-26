/**
 handlers = {
     get: [
         {
             path:'/',
             handle:(req,res)=>{}
         },
         {
             path:'/all',
             handle:(req,res)=>{}
         },
         {
             path:'/any',
             handle:function(req,res){}
         }
     ],
     post:[],
     put:[],
     delete: []
 }
 */
const {Router} = require('express');

class Controller {
    constructor(handlers){
        this.router = Router();
        this.handlers = handlers;
        for(const method of Object.keys(this.handlers)){
            this.handle(method); 
        }
    }

    handle(method){
        if(this.router[method] === undefined){
            throw new Error(`Method not defined in handlers "${method}"`);
        }
        for (const {path,handle} of this.handlers[method]) {
            this.router[method](path,handle);
        }
    }

}

module.exports = {Controller}