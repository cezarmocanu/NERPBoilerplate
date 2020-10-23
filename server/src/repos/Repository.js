class Repository {
    constructor(model){
        this.model = model;
    }

    getAll(){
        return this.model.findAll()
            .then(result => result)
            .catch(error => [])
    }

    getOneById(id){
        return this.model.findAll({where:{id}})
                    .then(result => {
                        if(result.length <= 0)
                            return {};
                        return result[0];
                    })
                    .catch(error => {})
    }

    saveOne(modelInstance){
        //TODO : sa verificam daca modelInstance are campurile potrivite
        //pentru this.model
        this.model.create(modelInstance)
            .catch(error => {})
    }

    updateOneById(modifications,id){
        this.model.update(modifications,{where:{id}});
    }

    deleteOneById(id){
        this.model.destroy({where:{id}});
    }
}

module.exports = Repository;