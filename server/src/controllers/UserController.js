const {Controller} = require('./Controller');
const {UserRepository} = require('../repos');

const handlers = {
    get:[
        {
            path:'/',
            handle:async (req,res)=>{
                const users = await UserRepository.getAll();
                return res.json(users);
            }
        },
        {
            path:'/:id',
            handle:async (req,res)=>{
                const {id} = req.params;
                const user = await UserRepository.getOneById(id);
                return res.json(user);
            }
        }
    ],
    post:[
        {
            path:'/',
            handle:async (req,res)=>{
                const newUser = {...req.body};
                await UserRepository.saveOne(newUser);
                res.json(newUser);
            }
        },
    ],
    put:[
        {
            path:'/',
            handle:async (req,res)=>{
                const {id} = req.body;
                delete req.body.id;
                const modifications = {...req.body};

                const user = await UserRepository.getOneById(id);

                if(Object.keys(user).length <= 0)
                    return res.json({});

                await UserRepository.updateOneById(modifications, id);

                const updatedUser = await UserRepository.getOneById(id);
                return res.json(updatedUser);
            }
        },
    ],
    delete:[
        {
            path:'/',
            handle:async (req,res)=>{
                const {id} = req.body;
                const user = await UserRepository.getOneById(id);

                if(Object.keys(user).length <= 0)
                    return res.json({});

                await UserRepository.deleteOneById(id);

                return res.json(user);
            }
        },
    ]
}

module.exports = new Controller(handlers).router;