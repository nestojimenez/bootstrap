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

Project.getProjectById = async (id) =>{
    try{
        const results = await client.query(`SELECT * FROM projects WHERE id = $1`, [id]);
        return results.rows;
    }
    catch(e)
    {
        console.log(`Something wrong happend ${e}`);
        return [];
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

Project.updateProject = async (project) => {
    try{
        const sql = 
        `
        UPDATE projects
        SET
            pr_name = $1,
            cu_name = $2,
            pr_owner = $3,
            email = $4,
            init_invest = $5,
            nre_hours = $6,
            ongo_headcount = $7,
            ongo_scrap = $8,
            ongo_spareparts = $9,
            ongo_overhead = $10,
            savings_headcount = $11,
            savings_scrap = $12,
            savings_costavoidance = $13,
            dri_safety = $14,
            dri_quality = $15,
            dri_capacity = $16,
            dri_customerreq = $17,
            pr_status = $18,
            capex_po = $19,
            aware = $20,
            pr_start_date = $21,
            pr_finish_date = $22,
            created_at = $23,
            updated_at = $24
        WHERE id = $25
        `;

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
                new Date(),
                project.id
            ]);
        console.log(results.rows);
        return results.rows;

    }catch(e){
        console.log(`Something went wrong ${e}`)
    }
}

module.exports = Project;