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
    }
    
}