const projectControllers = require('../controllers/projectControllers');



module.exports =(app)=> {
    app.get("/todos", projectControllers.readAllProjects);
    app.get('/project/getProjectById/:id', projectControllers.getProjectById);
    app.post("/create", projectControllers.createProject);
    app.get("/unique_owner", projectControllers.getUnitqueOwner);
    app.get('/project_filter/:pr_owner', projectControllers.filterProjectOwner);
    app.get('/unique_status', projectControllers.getUnitqueStatus);
    app.get('/status_filter/:pr_status', projectControllers.filterProjectStatus);
    app.get('/unique_customer', projectControllers.getUnitqueCustomer);
    app.get('/customer_filter/:cu_name', projectControllers.filterProjectCustomer);
    app.put('/update_project', projectControllers.updateProject);

}