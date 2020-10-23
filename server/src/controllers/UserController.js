const {Controller} = require('./Controller');
const {UsersRepository} = require('../repos/Repos');
const UserRepository = require('../repos/UsersRepository');

const handlers = {
    get:[
        {
            path:'/',
            handle:async (req,res)=>{
                return res.json(await UsersRepository.getAll());
            }
        },
        {
            path:'/:id',
            handle:async (req,res)=>{
                const {id} = req.params;
                return res.json(await UserRepository.getOneById(id));
            }
        }
    ],
    post:[
        {
            path:'/',
            handle:(req,res)=>{
                const newUser = {...req.body};
                UsersRepository.saveOne(newUser);
                //TODO: sa trimiti inapoi userul nou
                return res.send('User added');
            }
        },
    ],
    put:[
        {
            path:'/',
            handle:(req,res)=>{
                const {id} = req.params;
                const modifications = {...req.body};
                UsersRepository.updateOneById(modifications,id);
                //TODO: sa verificam daca userul exista
                //TODO: sa trimiti inapoi userul modificat
                return res.send('User modified');
            }
        },
    ],
    del:[
       //TODO sa mearga del
    ]
}

module.exports = new Controller(handlers).router;