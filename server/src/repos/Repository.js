class Repository {
    constructor(model){
        this.model = model;
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        }
        catch(err) {
            console.error(err);
            return [];
        }
    }

    async getOneById(id) {
        try {
            const result = await this.model.findAll({where:{id}});

            if(result.length <= 0)
                return {};

            return result[0];
        }
        catch(err) {
            console.error(err);
            return {};
        }
    }

    async saveOne(instance) {
        //TODO : sa verificam daca modelInstance are campurile potrivite
        try {
            await this.model.create(instance);
        }
        catch(err) {
            console.error(err);
        }
    }

    async updateOneById(modifications, id) {
        //TODO : sa verificam daca modelInstance are campurile potrivite
        try {
            await this.model.update(modifications,{where:{id}});
        }
        catch(err){
            console.error(err);
        }
    }

    async deleteOneById(id){
        try {
            this.model.destroy({where:{id}});
        }
        catch(err){
            console.error(err);
        }
    }
}

module.exports = Repository;