const client = require('./config');
const express = require("express");
const app = express();
app.use(express.json());
var path = require('path');

/*let project = { pr_name: 'Cono',
    cu_name: 'JJ',
    pr_owner:'Luis Medrano',
    email:'luis.medrano@flex.com',
    init_invest: '350000',
    nre_hours:'150000',
    ongo_headcount:'500',
    ongo_scrap:'500',
    ongo_spareparts:'500',
    ongo_overhead:'500',
    savings_headcount:'400000',
    savings_scrap:'400000',
    savings_costavoidance:'400000',
    dri_safety:'Some Impact',
    dri_quality:'Some Impact',
    dri_capacity:'Some Impact',
    dri_customerreq:'Some Impact' ,
    pr_status:'Concept'}*/


//createProject(project);

connect();
///////Routes///////////////////////////////////////////////
app.get("/", (req, res)=> res.sendFile(`${__dirname}/load_project.html`))

app.get("/todos", async (req, res)=>{
    const rows = await readAllProjects();
    //res.setHeader("content-type", "application/json");
    //res.send(JSON.stringify(rows));
    //res.send("Hey these are all my todos!")
})

app.post("/create", async(req, res)=>{
    let result = {}
    try{
        const reqJson = req.body;
        await createProject(reqJson);
        result.success = true;
        
    }catch(e){
        result.success = false;
    }
    /*finally{
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(result));
    }*/
    
})


/////////////Controllers////////////////////////////////////
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

async function readAllProjects(){
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

async function createProject(project){
    try{
        const sql = `INSERT INTO projects(pr_name,cu_name,pr_owner,email,init_invest,nre_hours,ongo_headcount,ongo_scrap,ongo_spareparts,ongo_overhead,savings_headcount,savings_scrap,savings_costavoidance,dri_safety,dri_quality,dri_capacity,dri_customerreq ,pr_status,created_at,updated_at) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)`
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

//Run server////////////////////////////////////////////////
app.use(express.static(path.join(__dirname)));

app.listen(8080, ()=>{
    console.log("My web server is listening..on port 8080");
})



