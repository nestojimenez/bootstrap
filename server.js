const client = require('./config');
const express = require("express");
const app = express();
app.use(express.json());
var path = require('path');
const projects = require('./routes/projectsRoutes')

connect();


app.get("/", (req, res)=> res.sendFile(`${__dirname}/load_project.html`))

///////Routes///////////////////////////////////////////////
projects(app);

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

app.listen(3000, '10.105.169.17' || 'localhost', function(){
    console.log('Aplicacion de NodeJS', + process.pid + 'Iniciada...')
});



