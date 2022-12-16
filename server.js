const client = require('./config');
const express = require("express");
const app = express();
app.use(express.json());
var path = require('path');
const project = require('./controllers/projectControllers');

connect();

///////Routes///////////////////////////////////////////////
app.get("/", (req, res)=> res.sendFile(`${__dirname}/load_project.html`))

app.get("/todos", async (req, res, next)=>{

    const rows = await project.readAllProjects(req, res, next);
    //res.setHeader("content-type", "application/json");
    //res.send(JSON.stringify(rows));
    //res.send("Hey these are all my todos!")*/
})

app.post("/create", async(req, res, next)=>{
    project.createProject(req, res, next);
    /*let result = {}
    try{
        const reqJson = req.body;
        await project.createProject(reqJson);
        result.success = true;
        
    }catch(e){
        result.success = false;
    }*/
    /*finally{
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(result));
    }*/
    
})


/////////////Models////////////////////////////////////
async function connect(){

    try{
        await client.connect()
        console.log('Conneted successfully.');
    }
    catch(e)
    {
        console.log(`Something wrong happend ${e}`);
    }
}

/*async function readAllProjects(){
    try{
        const results = await client.query("SELECT * FROM projects");
        return results.rows;
    }
    catch(e)
    {
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}*/

/*async function createProject(project){
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
}*/

//Run server////////////////////////////////////////////////
app.use(express.static(path.join(__dirname)));

app.listen(8080, ()=>{
    console.log("My web server is listening..on port 8080");
})



