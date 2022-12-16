let todos = [];
const filterOwner = document.getElementById('filter_owner');


const getAllProyects= async ()=>{
    const result = await fetch("http://10.105.168.159:3000/todos", {method:"GET"});
    todos = await result.json();    //All Project Data on JSON format
    
    fillHeaders(todos);  //Fill table headers
    
    fillTable(todos);  //Fill table table
    
    
}

const fillTable = (values) =>{
    const tableBody = document.getElementById('pr_tbody');
    tableBody.innerHTML = "";
    values.forEach(element =>{
        const tr = document.createElement('tr');

        const arrayValues = Object.values(element);
        arrayValues.forEach(value =>{
            //console.log(value);
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        })
        tableBody.appendChild(tr);
        
    })
}

const fillHeaders = (todos) =>{
    const headers = Object.keys(todos[0]);  //Get headers for table
    const tableHeaders = document.getElementById('pr_table_headers');
    

    headers.forEach(element => {
        const th = document.createElement('th');
        
        th.textContent = element;
        tableHeaders.appendChild(th);
    });
}

const getUniqueProejctOwners = async () =>{
    const result = await fetch("http://10.105.168.159:3000/unique_owner", {method:"GET" });
    const owners = await result.json();    //All Project Data on JSON format
    
    owners.forEach(element =>{
        const value = Object.values(element);
        console.log(value[0]);
        const option = document.createElement('option')
        option.textContent = value[0];
        filterOwner.appendChild(option);
    })
    //console.log(owners);
}

filterOwner.oninput = async ()=> {

    if(filterOwner.value === ''){
        getAllProyects();
    }
    else{
        const project = filterOwner.value;
        const result = await fetch("http://10.105.168.159:3000/project_filter/" + project, {method:"GET"});
        const rows = await result.json();
        console.log(rows);
        fillTable(rows);
    }

    console.log(filterOwner.value);
    
}

getAllProyects();
getUniqueProejctOwners();  //Load unique owners on select control 'filter_owners'