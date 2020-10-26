const createCRUDHandlers = (repository) => {
    return {
        get:[
            {
                path:'/',
                handle:async (req,res)=>{
                    const result = await repository.getAll();
                    return res.json(result);
                }
            },
            {
                path:'/:id',
                handle:async (req,res)=>{
                    const {id} = req.params;
                    const result = await repository.getOneById(id);
                    return res.json(result);
                }
            }
        ],
        post:[
            {
                path:'/',
                handle:async (req,res)=>{
                    const newInstance = {...req.body};
                    await repository.saveOne(newInstance);
                    res.json(newInstance);
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
    
                    const result = await repository.getOneById(id);
    
                    if(Object.keys(result).length <= 0)
                        return res.json({});
    
                    await repository.updateOneById(modifications, id);
    
                    const updatedInstance = await repository.getOneById(id);
                    return res.json(updatedInstance);
                }
            },
        ],
        delete:[
            {
                path:'/',
                handle:async (req,res)=>{
                    const {id} = req.body;
                    const result = await repository.getOneById(id);
    
                    if(Object.keys(result).length <= 0)
                        return res.json({});
    
                    await repository.deleteOneById(id);
    
                    return res.json(result);
                }
            },
        ]
    }
}

module.exports = {
    createCRUDHandlers
}