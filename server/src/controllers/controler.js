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
     del:[]
 }
 */
const {Router} = require('express');

class Controller {
    constructor(handlers){
        this.router = Router();
        this.handlers = handlers;
        this.handle("get");
        this.handle("post");
        this.handle("put");
        this.handle("del");
    }

    handle(method){
        if(this.handlers[method] === undefined){
            throw new Error(`Method not defined in handlers "${method}"`);
        }
        for (const {path,handle} of this.handlers[method]) {
            this.router[method](path,handle);
        }
    }

}

module.exports = {Controller}