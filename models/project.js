const client = require('../config');

Project = {};

Project.createProject = async (project) =>{
    try{
        const sql = `INSERT INTO projects(pr_name,cu_name,pr_owner,email,init_invest,nre_hours,ongo_headcount,ongo_scrap,ongo_spareparts,ongo_overhead,
            savings_headcount,savings_scrap,savings_costavoidance,dri_safety,dri_quality,dri_capacity,dri_customerreq ,pr_status,capex_po,aware,pr_start_date, pr_finish_date, created_at,updated_at) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,$23, $24)`
        await client.query(sql, 
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
        return true;
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

module.exports = Project;