const projectControllers = require('../controllers/projectControllers');



module.exports =(app)=> {
    app.get("/todos", projectControllers.readAllProjects);
    app.post("/create", projectControllers.createProject);
    app.get("/unique_owner", projectControllers.getUnitqueOwner);
    app.get('/project_filter/:pr_owner', projectControllers.filterProjectOwner);
}