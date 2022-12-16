const project = require('../models/project');

module.exports = {
    async createProject(req, res, next){
        let result = {}
        try{
            const reqJson = req.body;
            await project.createProject(reqJson);
            result.success = true;
        
        }catch(e){
            result.success = false;
        }
    },

    async readAllProjects (req, res, next) {
        const rows = await project.readAllProjects();
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(rows));
    }, 

    async getUnitqueOwner(req, res, next){
        const rows = await project.getUniqueOwner();
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(rows));
    },
    
    async filterProjectOwner(req, res, next){

        try{
            const pr_owner = req.params.pr_owner;
            const rows = await project.filterProjectOwner(pr_owner);
            res.setHeader("content-type", "application/json");
            res.send(JSON.stringify(rows));
        }
        catch(e){
            consologe.log(e);
        }

        //http://10.105.168.159:3000/project_filter/pr_owner
        
    }
    
}