const client = require('./config');
const express = require("express");
const app = express();
app.use(express.json());
var path = require('path');
const projects = require('./routes/projectsRoutes');
const phaseProject = require('./routes/phase_datesRoutes');
const expensesProject = require('./routes/expensesRoutes');
//const ip = '10.105.169.39';
let ip = require('./project_constants');
let ipx = ip();
connect();


app.get("/", (req, res)=> res.sendFile(`${__dirname}/load_project.html`))

///////Routes///////////////////////////////////////////////
projects(app);
phaseProject(app);
expensesProject(app);


////////Function Connect///////////////////////////////////
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

//Run server////////////////////////////////////////////////
app.use(express.static(path.join(__dirname)));

/*app.listen(8080, ()=>{
    console.log("My web server is listening..on port 8080");
})*/

app.listen(3000, ipx|| 'localhost', function(){
    console.log('Aplicacion de NodeJS', + process.pid + 'Iniciada...' + ipx)
});



