const client = require('../config');

Project = {};

Project.createProject = async (project) =>{
    try{
        const sql = `INSERT INTO projects(pr_name,cu_name,pr_owner,email,init_invest,nre_hours,ongo_headcount,ongo_scrap,ongo_spareparts,ongo_overhead,
            savings_headcount,savings_scrap,savings_costavoidance,dri_safety,dri_quality,dri_capacity,dri_customerreq ,pr_status,capex_po,aware,pr_start_date, pr_finish_date, created_at,updated_at) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,$23, $24) RETURNING id`
        const results = await client.query(sql, 
        [
            project.pr_name,
            project.cu_name,
            project.pr_owner,
            project.email,
            project.init_invest,
            project.nre_hours,
            project.ongo_headcount,
            project.ongo_scrap,
            project.ongo_spareparts,
            project.ongo_overhead,
            project.savings_headcount,
            project.savings_scrap,
            project.savings_costavoidance,
            project.dri_safety,
            project.dri_quality,
            project.dri_capacity,
            project.dri_customerreq ,
            project.pr_status,
            project.capex_po,
            project.aware,
            project.pr_start_date,
            project.pr_finish_date,
            new Date(),
            new Date()
        ]);
        console.log(results.rows);
        return results.rows;
    }
    catch(e){
        
        console.log(e);
        return false;
    }
}

Project.readAllProjects = async () =>{
    try{
        const results = await client.query("SELECT * FROM projects");
        return results.rows;
    }
    catch(e)
    {
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

Project.getUniqueOwner = async () => {
    try{
        const result = await client.query("SELECT DISTINCT pr_owner FROM projects;")
        return result.rows;
    }
    catch(e){
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

Project.filterProjectOwner = async (pr_owner) =>{
    try{
        const sql = `SELECT * FROM projects WHERE pr_owner = $1`;
        const result = await client.query(sql, [pr_owner])
        return result.rows;
    }
    catch(e){
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

Project.getUniqueStatus = async () => {
    try{
        const result = await client.query("SELECT DISTINCT pr_status FROM projects;")
        return result.rows;
    }
    catch(e){
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

Project.filterProjectStatus = async (pr_status) => {
    try{
        const sql = `SELECT * FROM projects WHERE pr_status = $1`;
        const result = await client.query(sql, [pr_status])
        return result.rows;
    }
    catch(e){
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

Project.getUniqueCustomer = async () => {
    try{
        const result = await client.query("SELECT DISTINCT cu_name FROM projects;")
        return result.rows;
    }
    catch(e){
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

Project.filterProjectCustomer = async (cu_name) => {
    try{
        const sql = `SELECT * FROM projects WHERE cu_name = $1`;
        const result = await client.query(sql, [cu_name])
        return result.rows;
    }
    catch(e){
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

module.exports = Project;